import {FluentBehaviourTreeBuilder, Node} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import {clickUiWidget, setTargetUiWidget} from '@/trees/out-of-game/actions'
import {FindableUiWidget} from '@/trees/out-of-game/enums'

const builder = new FluentBehaviourTreeBuilder()

export const findAndClickUiWidget = (
  findableWidget: FindableUiWidget
): Node<Blackboard> =>
  // prettier-ignore
  builder
    .sequence()
      .action(setTargetUiWidget(findableWidget))
      .action(clickUiWidget())
    .end()
    .build()
