import {ActionLeaf, NodeState} from '@d2ts/ts-fluent-bt'
import {mouse} from '@d2ts/core'
import {createLogger} from '@/logger'
import {Blackboard} from '@/blackboard'

const logger = createLogger('teleportToCoordinates')

export const teleportToCoordinates = (
  coordinates?: Point
): ActionLeaf<Blackboard> =>
  new ActionLeaf((blackboard: Blackboard) => {
    // if player state is casting, return node state running
    const target =
      coordinates || blackboard.pathing.path[blackboard.pathing.pathIndex]

    logger.debug(`Teleporting to position x:${target.x}, y: ${target.y}`)

    mouse.click(target)

    return NodeState.Succeeded
  })
