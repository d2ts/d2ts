import {ActionLeaf, NodeState} from '@d2ts/ts-fluent-bt'
import {canUseTeleport, getPathToPoint} from '@d2ts/pathing'
import {createLogger} from '@/logger'
import {Blackboard} from '@/blackboard'

const logger = createLogger('setPathToPoint')

export const setPathToPoint = (): ActionLeaf<Blackboard> =>
  new ActionLeaf(blackboard => {
     const point = blackboard.pathing.targetPoint

    if (!point) {
      logger.debug('Failed to move to point - point was undefined')

      return NodeState.Failed
    }

    const useTeleport = blackboard.pathing.useTeleport ? canUseTeleport() : false
    const path = getPathToPoint(point, useTeleport)

    if (!path) {
      logger.debug(`Failed to generate path to ${point.x}, ${point.y}`)

      return NodeState.Failed
    }

    logger.debug(
      `Calculated path to point ${point.x}, ${point.y} ${
        useTeleport ? 'using' : 'not using'
      } teleport`
    )

    blackboard.pathing.pathIndex = 0
    blackboard.pathing.path = path

    return NodeState.Succeeded
  })

