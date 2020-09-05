import {Node, FluentBehaviourTreeBuilder} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import {
  incrementPath,
  moveToCoordinates,
  checkPathingStatus,
} from '@/trees/pathing'

const builder = new FluentBehaviourTreeBuilder()

export const followPath = (): Node<Blackboard> =>
  // prettier-ignore
  builder
    .reactiveSequence()
      .insert(moveToCoordinates())
      .action(incrementPath())
      .action(checkPathingStatus())
    .end()
    .build()
