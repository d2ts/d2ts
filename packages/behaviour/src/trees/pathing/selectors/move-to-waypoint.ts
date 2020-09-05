import {Node, FluentBehaviourTreeBuilder} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import {moveToTownEntity} from '@/trees/town'
import {moveToPoint} from '@/trees/pathing'
import {getWaypointPreset} from '@d2ts/unit'

const builder = new FluentBehaviourTreeBuilder()

/**
 * Move to waypoint when a path to the waypoint is required.
 *
 * If we are out of town we find the waypoint preset of the current area and path to that.
 * If we are in town we use the `moveToTownEntity` tree.
 *
 * @return {Node<Blackboard>}
 */
export const moveToWaypoint = (): Node<Blackboard> =>
  // prettier-ignore
  builder
    .selector()
      .sequence()
        .condition(blackboard => !me.inTown)
        .insert(moveToPoint(blackboard => getWaypointPreset()))
      .end()
      .sequence()
        .condition(blackboard => me.inTown)
        .insert(moveToTownEntity('waypoint'))
      .end()
    .end()
    .build()
