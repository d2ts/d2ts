export const getWaypointPreset = (area: number = me.area) => {
  const waypointIds = [119, 145, 156, 157, 237, 238, 288, 323, 324, 398, 402, 429, 494, 496, 511, 539]

  for (let i = 0; i < waypointIds.length; i += 1) {
    const waypointPreset = getPresetUnit(area, 2, waypointIds[i])

    if (waypointPreset) {
      return waypointPreset
    }
  }
}
