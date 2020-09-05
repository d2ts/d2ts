import {FluentBehaviourTreeBuilder, Node} from '@d2ts/ts-fluent-bt'
import {singlePlayerLogin} from '@/trees/out-of-game/sequences'
import {checkOogLocation} from '@/trees/out-of-game/conditions'
import {OutOfGameLocation} from '@/trees/out-of-game/enums'
import {keyPress} from '@/trees/core/actions'
import {Blackboard} from '@/blackboard'
import {isInGame} from '@/trees/core/conditions'

const builder = new FluentBehaviourTreeBuilder()

export const rootOutOfGame = (): Node<Blackboard> =>
  // prettier-ignore
  builder
    .sequence()
      .invert(isInGame())
      .selector()
        .insert(singlePlayerLogin())
      .end()
    .end()
    .build()
