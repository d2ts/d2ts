import {Node, FluentBehaviourTreeBuilder} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import {setPathToPoint, followPath, setTargetPoint} from '@/trees/pathing'
import {ValueProvider} from '@/blackboard/value-provider.type'

const builder = new FluentBehaviourTreeBuilder()

export const moveToPoint = (
  point: ValueProvider<Point> | Point
): Node<Blackboard> =>
  // prettier-ignore
  builder
    .sequence()
      .action(setTargetPoint(point))
      .action(setPathToPoint())
      .insert(followPath())
    .end()
    .build()
