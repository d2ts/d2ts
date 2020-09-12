import memoize from 'lodash.memoize'
import {MpqTable} from '@d2ts/core'
import {Skill, SkillLevelCalculation} from '@/enums'

export const getRange = (skill: Skill) => null

// TODO: Can we use tables instead?
const isNoManaCostSkill = (skill: Skill) => {
  const noManaCostSkills = [
    Skill.attack,
    Skill.kick,
    Skill.throw,
    Skill.unsummon,
    Skill.left_hand_swing,
    Skill.left_hand_throw,
  ]

  return noManaCostSkills.includes(skill)
}

// Credits mBot. Taken from kolbot (Misc.js, Skill.getManaCost)
export const getManaCost = memoize(
  (skill: Skill) => {
    if (isNoManaCostSkill(skill)) {
      return 0
    }

    const skillLevel = me.getSkill(skill, SkillLevelCalculation.WithBonusSkills)
    const effectiveShift = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
    const levelMana =
      getBaseStat(MpqTable.Skills, skill, 'lvlmana') === 65535
        ? -1
        : getBaseStat(MpqTable.Skills, skill, 'lvlmana')

    return Math.max(
      (getBaseStat(MpqTable.Skills, skill, 'mana') +
        levelMana * (skillLevel - 1)) *
        (effectiveShift[getBaseStat(MpqTable.Skills, skill, 'manashift')] /
          256),
      getBaseStat(MpqTable.Skills, skill, 'minmana')
    )
  },
  // Cache as skillid:skillLevel so if we change the skill level between calls the cost is recalculated.
  // We do this because some skills have a different mana cost based on level.
  (skill: Skill) =>
    `${skill}:${me.getSkill(skill, SkillLevelCalculation.WithBonusSkills)}`
)
