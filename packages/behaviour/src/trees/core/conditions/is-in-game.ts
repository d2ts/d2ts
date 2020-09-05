import {ConditionLeaf} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'

export const isInGame = (): ConditionLeaf<Blackboard> =>
  new ConditionLeaf((blackboard: Blackboard) => me.ingame)
