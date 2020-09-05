import {Town} from '@/interfaces'

// Rouge Encampment spots must be calculated based on the position of the camp fire as there are multiple layouts.
export const getRougeEncampment = (): Town => {
  const waypoint = getPresetUnit(1, 2, 119)
  const fireUnit = getPresetUnit(1, 2, 39)

  if (!fireUnit) {
    return
  }

  const fire = {
    x: fireUnit.roomx * 5 + fireUnit.x,
    y: fireUnit.roomy * 5 + fireUnit.y,
  }

  return {
    healer: {
      name: 'akara',
      coordinates: {
        x: 1,
        y: 1,
      },
    },
    repairer: {
      name: 'charsi',
      coordinates: {
        x: 1,
        y: 1,
      },
    },
    gambler: {
      name: 'gheed',
      coordinates: {
        x: 1,
        y: 2,
      },
    },
    mercenarySupplier: {
      name: 'kashya',
      coordinates: {
        x: fire.x + 14,
        y: fire.y - 4,
      },
    },
    portalSpot: {
      coordinates: {
        x: fire.x - 7,
        y: fire.y - 12,
      },
    },
    stash: {
      coordinates: {
        x: 1,
        y: 1,
      },
    },
    waypoint: {
      presetId: 119,
      coordinates: {
        x: waypoint.roomx * 5 + waypoint.x,
        y: waypoint.roomy * 5 + waypoint.y,
      },
    },
  }
}
