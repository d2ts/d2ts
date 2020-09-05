import {Node, FluentBehaviourTreeBuilder} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import {AreaId} from '@d2ts/pathing'
import {moveToWaypoint, useWaypoint} from '@/trees/pathing'

const builder = new FluentBehaviourTreeBuilder()

export const takeWaypoint = (targetArea: AreaId): Node<Blackboard> =>
  // prettier-ignore
  builder
    .sequence()
      .insert(moveToWaypoint())
      .action(useWaypoint(targetArea))
      .timeout(500, builder.createCondition(() => me.area === targetArea))
    .end()
    .build()
