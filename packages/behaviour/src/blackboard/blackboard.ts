import {Config} from '@d2ts/core'

export interface Blackboard {
  config: Config
  uiWidget: {
    target: UiWidget
    targetName: string
    setText: string
  }
  pathing: {
    // Display debug pathing information.
    // E.g Draw the current path.
    debug: boolean
    // If this is false don't use teleport, otherwise teleport usage will be calculated based on skills/etc.
    useTeleport: boolean
    // A path from one x,y position to another x,y position calculated using `getPath`.
    path: Point[]
    // Current position in the pathing route.
    pathIndex: number,
    targetPoint: Point
  }
  unit: {
    target: Unit
  }
}
