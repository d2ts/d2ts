import {FluentBehaviourTreeBuilder, Node} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import {isInGame} from '@/trees/core/conditions'

const builder = new FluentBehaviourTreeBuilder()

export const rootInGame = (): Node<Blackboard> =>
  // prettier-ignore
  builder
    .sequence()
      .condition(isInGame())
      // .insert(rootTown())
      // .insert(runRoutines())
    .end()
    .build()
