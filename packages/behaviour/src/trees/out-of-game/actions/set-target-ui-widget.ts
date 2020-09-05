import {ActionLeaf, NodeState} from '@d2ts/ts-fluent-bt'
import {createLogger} from '@/logger'
import {Blackboard} from '@/blackboard'
import {FindableUiWidget} from '@/trees/out-of-game/enums'

const logger = createLogger('setTargetUiWidget')

export const setTargetUiWidget = (
  findableWidget: FindableUiWidget
): ActionLeaf<Blackboard> =>
  new ActionLeaf((blackboard: Blackboard) => {
    const {type, x, y, sizex, sizey, name} = findableWidget
    const widget = getControl(type, x, y, sizex, sizey)

    if (!widget) {
      logger.debug(`Failed to find widget ${name}`)

      return NodeState.Failed
    }

    logger.debug(`Found widget ${name}`)

    blackboard.uiWidget.target = widget
    blackboard.uiWidget.targetName = name

    return NodeState.Succeeded
  })
