import {Node, FluentBehaviourTreeBuilder} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'

const builder = new FluentBehaviourTreeBuilder()

export const moveToPreset = (): Node<Blackboard> =>
  // prettier-ignore
  builder
    .sequence()
    .end()
    .build()
