import {Node, FluentBehaviourTreeBuilder} from '@d2ts/ts-fluent-bt'
import {KeyId} from '@d2ts/core'
import {keyPress} from '@/trees/core/actions'
import {Blackboard} from '@/blackboard'
import {checkOogLocation} from '@/trees/out-of-game/conditions'
import {OutOfGameLocation} from '@/trees/out-of-game/enums'
import {selectCharacter} from '@/trees/out-of-game/actions'

const builder = new FluentBehaviourTreeBuilder()

export const loginCharacter = (): Node<Blackboard> =>
  // prettier-ignore
  builder
    .sequence()
      .condition(checkOogLocation(OutOfGameLocation.CharSelect))
      .action(selectCharacter())
      .action(keyPress(KeyId.Enter))
    .end()
    .build()
