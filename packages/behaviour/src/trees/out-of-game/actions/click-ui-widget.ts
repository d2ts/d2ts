import {ActionLeaf, NodeState} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import {createLogger} from '@/logger'

const logger = createLogger('clickUiWidget')

export const clickUiWidget = (): ActionLeaf<Blackboard> =>
  new ActionLeaf((blackboard: Blackboard) => {
    logger.debug(`Clicking widget: ${blackboard.uiWidget.targetName}`)

    blackboard.uiWidget.target.click()

    return NodeState.Succeeded
  })
