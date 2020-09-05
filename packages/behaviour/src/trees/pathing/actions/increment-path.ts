import {ActionLeaf, NodeState} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import {createLogger} from '@/logger'

const logger = createLogger('incrementPath')

export const incrementPath = (): ActionLeaf<Blackboard> =>
  new ActionLeaf((blackboard: Blackboard) => {
    const {pathing} = blackboard

    pathing.pathIndex += 1

    logger.debug(`Current path index increased to ${pathing.pathIndex}`)

    return NodeState.Succeeded
  })
