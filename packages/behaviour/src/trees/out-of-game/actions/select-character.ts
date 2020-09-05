import {ActionLeaf, NodeState} from '@d2ts/ts-fluent-bt'
import {linkedList} from '@d2ts/core'
import {Blackboard} from '@/blackboard'
import {createLogger} from '@/logger'

const logger = createLogger('selectCharacter')

export const selectCharacter = (): ActionLeaf<Blackboard> =>
  new ActionLeaf((blackboard: Blackboard) => {
    // This is the first character select box.
    const currentWidget = getControl(4, 37, 178, 200, 92)
    const characterName = blackboard.config.profile.characterName
    const foundWidget = linkedList.find(currentWidget, (widget: UiWidget) => {
      const widgetText = widget.getText()

      if (!Array.isArray(widgetText)) {
        return false
      }

      return widgetText[1] === characterName
    })

    if (!foundWidget) {
      logger.debug(`Failed to find character: ${characterName}`)

      return NodeState.Failed
    }

    logger.debug(`Selecting character: ${characterName}`)
    foundWidget.click()

    return NodeState.Succeeded
  })
