import memoize from 'lodash.memoize'
import {MpqTable} from '@d2ts/core'
import {UnitState, isMorphed} from '@d2ts/unit'
import {Skill} from '@/enums'
import {getManaCost} from '@/utils'

// TODO: Can't use getBaseState, the table structure in D2BS looks outdated. This will do.
const timedSkills = [
  Skill.poison_javelin,
  Skill.plague_javelin,
  Skill.immolation_arrow,
  Skill.fire_wall,
  Skill.meteor,
  Skill.blizzard,
  Skill.hydra,
  Skill.frozen_orb,
  Skill.fist_of_the_heavens,
  Skill.firestorm,
  Skill.wearwolf,
  Skill.wearbear,
  Skill.molten_boulder,
  Skill.eruption,
  Skill.volcano,
  Skill.summon_grizzly,
  Skill.armageddon,
  Skill.hurricane,
  Skill.shock_field,
  Skill.shadow_warrior,
  Skill.dragon_flight,
  Skill.blade_shield,
  Skill.shadow_master,
]

export const restrictedSkillMap: Partial<Record<Skill, UnitState[]>> = {}

/**
 * Populate a map of restricted skills using game tables.
 *
 * This is automatically performed once at the start of scripts running but a reload can be forced.
 *
 * @param forceReload Force a re-population of the restrictedSkillMap
 * @return Return the populated restricted skill map.
 */
export const populateRestrictedSkills = (forceReload = false) => {
  if (!forceReload && restrictedSkillMap) {
    return
  }

  Object.values(Skill)
    .filter((value) => !isNaN(Number(value)))
    .forEach((skillId: Skill) => {
      // The 'restrict' column is a number specifying how many restrictions the skill has.
      // E.g if restrict = 2 then the restricted states can be in the 'State1' and 'State2' columns.
      // It seems the restrictions aren't always in the state columns, for example Attack has 1 restriction but nothing in
      // the state columns.
      const restrictionCount = getBaseStat(MpqTable.Skills, skillId, 'restrict')

      if (!restrictionCount) {
        return
      }

      restrictedSkillMap[skillId] = []

      for (
        let stateIndex = 1;
        stateIndex <= restrictionCount;
        stateIndex += 1
      ) {
        const restriction = getBaseStat(
          MpqTable.Skills,
          skillId,
          `State${stateIndex}`
        )

        // Some skills have restrictions but no restricted states. We're only checking restricted states for now.
        if (!restriction) {
          continue
        }

        restrictedSkillMap[skillId].push(restriction)
      }
    })

  return restrictedSkillMap
}

// Populate restricted skills once as import side effect.
populateRestrictedSkills()

export const isOnCooldown = () => me.getState(UnitState.skilldelay)

// Eventually replace the hardcoded timedSkills with a table lookup when 'delay' column lookup is fixed.
export const isTimedSkill = (skill: Skill) => timedSkills.includes(skill)

const canCastInTown = memoize((skill: Skill) => {
  return !!getBaseStat(MpqTable.Skills, skill, 'InTown')
})

/**
 * Check if we can cast the supplied skill based on if we are in town or not.
 *
 * Only certain skills can be cast in town, all skills can be casted outside of town.
 *
 * @param skill Id of the skill.
 * @return true if we can cast the skill based on our in town/our of town state, otherwise false.
 */
export const canCastWithTownState = (skill: Skill) =>
  me.inTown ? canCastInTown(skill) : true

/**
 * Check if we have enough mana to cast the supplied skill.
 *
 * @param skill Id of the skill.
 * @return true if we have enough mana, otherwise false.
 */
export const canCastWithCurrentMana = (skill: Skill) =>
  me.mp >= getManaCost(skill)

/**
 * Check if we have a valid state to cast the supplied skill.
 *
 * For example:
 * Check if the skill is timed and we're on a skill cooldown.
 * If our state is a bear/werewolf this function will check if that skill can be casted in the current form.
 *
 * @param skill Id of the skill.
 * @return true if we have a valid state, otherwise false.
 */
export const canCastWithCurrentState = (skill: Skill) => {
  if (isOnCooldown() && isTimedSkill(skill)) {
    return false
  }

  if (isMorphed(me)) {
    const restrictedSkillEntry = restrictedSkillMap[skill]

    // restrictedSkillEntry contains array of states where the skill can be casted.
    // If the array contains werewolf/bear then this skill is able to be casted when morphed.
    // If there's no entries we can't cast the skill because we're morphed.
    if (!restrictedSkillEntry.length) {
      return false
    }

    return restrictedSkillEntry.some((state) => me.getState(state))
  }

  return true
}
