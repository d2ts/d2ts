import {FluentBehaviourTreeBuilder, Node} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import {rootOutOfGame} from '@/trees/out-of-game'
import {rootInGame} from '@/trees/in-game'

const builder = new FluentBehaviourTreeBuilder()

export const rootTree = (): Node<Blackboard> =>
  // prettier-ignore
  builder
    .selector()
      .insert(rootOutOfGame())
      .insert(rootInGame())
    .end()
    .build()
