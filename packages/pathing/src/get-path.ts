import {isMorphed, UnitStat} from '@d2ts/unit'
import {Skill} from '@d2ts/skills'
import {AreaId} from '@/enums'

export const canUseTeleport = (): boolean =>
  !isMorphed(me) &&
  !me.inTown &&
  (me.getSkill(Skill.teleport, 1) ||
    me.getStat(UnitStat.item_nonclassskill, Skill.teleport))

const getPathReducer = (useTeleport: boolean): 0 | 1 => (useTeleport ? 1 : 0)

const getPathRadius = (useTeleport: boolean): number => {
  if (!useTeleport) {
    return 5
  }

  if (
    [
      AreaId.MaggotLairLevel1,
      AreaId.MaggotLairLevel2,
      AreaId.MaggotLairLevel3,
    ].includes(me.area)
  ) {
    return 30
  }

  return 40
}

const calculatePath = (destination: Point, useTeleport: boolean): Point[] => {
  // D2BS returns the path in reverse. The first node is our current location.
  const path = getPath(
    me.area,
    destination.x,
    destination.y,
    me.x,
    me.y,
    getPathReducer(useTeleport),
    getPathRadius(useTeleport)
  )

  // D2BS JS engine reverses the array in-place, reverse() returns nothing.
  path.reverse()

  return path
}

export const getExitForArea = (exit: AreaId) => {
  const currentArea = getArea()

  if (!currentArea) {
    return
  }

  return currentArea.exits.find((e) => e.target === exit)
}

export const getPathToPoint = (point: Point, useTeleport: boolean) =>
  calculatePath(point, useTeleport)

export const getPathToPresetUnit = () => {}
