import get from 'lodash.get'
import {ConditionLeaf} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'

export const blackboardKeyHasValue = (
  blackboardKey: string
): ConditionLeaf<Blackboard> =>
  new ConditionLeaf(
    (blackboard: Blackboard) => !!get(blackboard, blackboardKey)
  )
