import {Node, FluentBehaviourTreeBuilder} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import {teleportToCoordinates, walkToCoordinates} from '@/trees/pathing'

const builder = new FluentBehaviourTreeBuilder()

export const moveToCoordinates = (): Node<Blackboard> =>
  // prettier-ignore
  builder
    .selector()
      // .sequence()
    // check if we should use teleport.
    //     .insert(teleportToCoordinates())
      // .end()
      .insert(walkToCoordinates())
    .end()
    .build()
