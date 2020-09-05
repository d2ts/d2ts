import {ValueProvider} from '@/blackboard/value-provider.type'
import {ActionLeaf, NodeState} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'

export const setTargetPoint = (
  point: ValueProvider<Point> | Point
): ActionLeaf<Blackboard> =>
  new ActionLeaf((blackboard) => {
    blackboard.pathing.targetPoint =
      typeof point === 'function' ? point(blackboard) : point

    return NodeState.Succeeded
  })
