import {Node} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import {AreaId, getExitForArea} from '@d2ts/pathing'
import {moveToPoint} from '@/trees/pathing'
import {ValueProvider} from '@/blackboard/value-provider.type'

export const moveToExit = (
  exit: ValueProvider<AreaId> | AreaId
): Node<Blackboard> =>
  moveToPoint((blackboard) =>
    getExitForArea(typeof exit === 'function' ? exit(blackboard) : exit)
  )
