import {MpqTable} from '@d2ts/core'
import {Skill} from '@/enums'

// Haven't thought of a way to detect this, if you try index a row higher than max it still returns a random value.
const SKILL_COUNT = 356

// Can't use getBaseState, the table structure in D2BS looks outdated. This will do.
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
const townSkills = []
const morphedSkills = []

// Populate the arrays once.
for (let i = 0; i < SKILL_COUNT; i += 1) {
  if (!!getBaseStat(MpqTable.Skills, i, 'InTown')) {
    townSkills.push(i)
  }

  if (!!getBaseStat(MpqTable.Skills, i, 'restrict')) {
    morphedSkills.push(i)
  }
}

export const getRange = (skill: Skill) => null

export const canCast = (skill: Skill) => true

export const cast = (
  skill: Skill,
  coordinates: Point = me,
  usePacket = false
) => null
