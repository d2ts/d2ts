import {ActionLeaf, NodeState} from '@d2ts/ts-fluent-bt'
import set from 'lodash.set'
import {Blackboard} from '@/blackboard'
import {createLogger} from '@/logger'
import {ValueProvider} from '@/blackboard/value-provider.type'

const logger = createLogger('setBlackboardKey')

export const setBlackboardKey = (
  key: string,
  provider: ValueProvider
): ActionLeaf<Blackboard> =>
  new ActionLeaf((blackboard: Blackboard) => {
    const value = provider(blackboard)

    logger.debug(`Setting blackboard key ${key}=${value}`)
    set(blackboard, key, value)

    return NodeState.Succeeded
  })
