import {ActionLeaf, NodeState} from '@d2ts/ts-fluent-bt'
import {mouse} from '@d2ts/core'
import {isMoving} from '@d2ts/unit'
import {createLogger} from '@/logger'
import {Blackboard} from '@/blackboard'

const logger = createLogger('walkToCoordinates')
// If we are within DISTANCE_THRESHOLD if the target point the walking should be considered successful.
const DISTANCE_THRESHOLD = 3

export const walkToCoordinates = (
  coordinates?: Point
): ActionLeaf<Blackboard> =>
  new ActionLeaf((blackboard: Blackboard) => {
    const target =
      coordinates || blackboard.pathing.path[blackboard.pathing.pathIndex]
    const distanceFromTarget = getDistance(me, target)

    if (distanceFromTarget <= DISTANCE_THRESHOLD) {
      logger.debug(
        `Successfully walked to position x:${target.x}, y: ${target.y}`
      )

      return NodeState.Succeeded
    }

    if (!isMoving(me)) {
      logger.debug(`Walking to position x:${target.x}, y: ${target.y}`)
      mouse.click(target)
    }

    return NodeState.Running
  })
