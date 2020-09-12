import {mouse} from '@d2ts/core'
import {CastType, GetSkillMode, Skill, SetSkill} from '@/enums'

const castTypeMap = {
  [CastType.RightSkill]: {
    clickType: 3,
    shift: false,
  },
  [CastType.LeftSkillShift]: {
    clickType: 0,
    shift: true,
  },
  [CastType.LeftSkill]: {
    clickType: 0,
    shift: false,
  },
  [CastType.RightSkillShift]: {
    clickType: 3,
    shift: true,
  },
}

const skillActionMap = {
  [CastType.RightSkill]: {
    get: GetSkillMode.RightSkillId,
    set: SetSkill.Right,
  },
  [CastType.RightSkillShift]: {
    get: GetSkillMode.RightSkillId,
    set: SetSkill.Right,
  },
  [CastType.LeftSkill]: {
    get: GetSkillMode.LeftSkillId,
    set: SetSkill.Left,
  },
  [CastType.LeftSkillShift]: {
    get: GetSkillMode.LeftSkillId,
    set: SetSkill.Left,
  },
}

export const getSkillCastType = (skill: Skill): CastType => null

export const selectSkill = (
  skill: Skill,
  castType: CastType,
  itemWithCharges?: Item
) => {
  const skillAction = skillActionMap[castType]

  if (me.getSkill(skillAction.get) === skill) {
    return true
  }

  return me.setSkill(skill, skillAction.set, itemWithCharges)
}

export const castClick = (
  castType: CastType = CastType.RightSkill,
  coordinates: Point = me
) =>
  mouse.click(
    coordinates,
    castTypeMap[castType].shift,
    castTypeMap[castType].clickType
  )

export const castPacket = () => {}
