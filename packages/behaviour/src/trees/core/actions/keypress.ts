import {ActionLeaf, NodeState} from '@d2ts/ts-fluent-bt'
import {KeyId} from '@d2ts/core'
import {Blackboard} from '@/blackboard'
import {createLogger} from '@/logger'

const logger = createLogger('keyPress')

export const keyPress = (keyId: KeyId): ActionLeaf<Blackboard> =>
  new ActionLeaf(() => {
    logger.debug(`Pressing key: ${KeyId[keyId]}`)
    sendKey(keyId)

    return NodeState.Succeeded
  })
