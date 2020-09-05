import {ActionLeaf, NodeState} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import {createLogger} from '@/logger'

const logger = createLogger('setTextUiWidget')

export const setTextUiWidget = (): ActionLeaf<Blackboard> =>
  new ActionLeaf((blackboard: Blackboard) => {
    const {target, targetName, setText} = blackboard.uiWidget

    logger.debug(`Setting widget ${targetName} text to ${setText}`)
    target.setText(setText)

    return NodeState.Succeeded
  })
