import {ActionLeaf, NodeState} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import {createLogger} from '@/logger'

const logger = createLogger('checkPathingStatus')

export const checkPathingStatus = (): ActionLeaf<Blackboard> =>
  new ActionLeaf((blackboard: Blackboard) => {
    const {pathing} = blackboard

    if (pathing.pathIndex < pathing.path.length) {
      return NodeState.Running
    }

    logger.debug('Successfully traversed path')

    return NodeState.Succeeded
  })
