export interface TownPosition {
  coordinates: Point
}

export interface TownNpc extends TownPosition {
  name: string
}

export interface TownWaypoint extends TownPosition {
  presetId: number
}

export type ReadOnlyTownNpc = Readonly<TownNpc>

export interface Town {
  healer: ReadOnlyTownNpc
  repairer: ReadOnlyTownNpc
  gambler: ReadOnlyTownNpc
  mercenarySupplier: ReadOnlyTownNpc
  portalSpot: TownPosition
  stash: TownPosition
  waypoint: Readonly<TownWaypoint>
}
