import {AreaId} from '@d2ts/pathing'
import {getRougeEncampment} from '@/rouge-encampment'
import {Town} from '@/interfaces'

export const townIds: AreaId[] = [
  AreaId.RogueEncampment,
  AreaId.LutGholein,
  AreaId.KurastDocktown,
  AreaId.ThePandemoniumFortress,
  AreaId.Harrogath,
]
const towns: Town[] = []

export function getTownEntity<T extends keyof Town>(entity: T): Town[T] {
  // Positions for RougeEncampment need to be calculated.
  if (towns.length !== 5 && me.act === 1) {
    towns.unshift(getRougeEncampment())
  }

  // If we have loaded all towns then we can just use me.act - 1 to get the index.
  // If we haven't loaded act 1 yet then we need to account for that and do - 2.
  const townIndex = towns.length === 5 ? me.act - 1 : me.act - 2

  // TODO: change to townIndex after testing.
  return towns[0][entity]
}

export type TownEntity = keyof Town

export const isInTown = (unit: Unit) => townIds.includes(unit.area)
export const getHealer = () => getTownEntity('healer')
export const getRepairer = () => getTownEntity('repairer')
export const getGambler = () => getTownEntity('gambler')
export const getPortalSpot = () => getTownEntity('portalSpot')
export const getStash = () => getTownEntity('stash')
export const getWaypoint = () => getTownEntity('waypoint')
