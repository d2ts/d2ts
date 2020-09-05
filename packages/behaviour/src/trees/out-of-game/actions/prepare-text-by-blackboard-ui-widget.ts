import {ActionLeaf, NodeState} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import get from 'lodash.get'
import {createLogger} from '@/logger'

const logger = createLogger('prepareTextByBlackboardUiWidget')

export const prepareTextByBlackboardUiWidget = (
  blackboardKey: string
): ActionLeaf<Blackboard> =>
  new ActionLeaf((blackboard: Blackboard) => {
    const textToSet = get(blackboard, blackboardKey)

    if (!textToSet) {
      logger.debug(`Failed to find blackboard property: ${blackboardKey}`)

      return NodeState.Failed
    }

    logger.debug(`Setting blackboard property ${blackboardKey} to ${textToSet}`)

    blackboard.uiWidget.setText = textToSet

    return NodeState.Succeeded
  })
