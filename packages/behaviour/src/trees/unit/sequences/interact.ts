import {Node, FluentBehaviourTreeBuilder} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import {moveToPoint} from '@/trees/pathing'
import {interactTarget} from '@/trees/unit'
import {blackboardKeyHasValue, setBlackboardKey} from '@/trees/core'
import {inRange} from '@/trees/unit/conditions'

const builder = new FluentBehaviourTreeBuilder()

export const interact = (interacteeProvider: (blackboard: Blackboard) => Unit): Node<Blackboard> =>
  // prettier-ignore
  builder
    .sequence()
      .action(setBlackboardKey('unit.target', interacteeProvider))
      .condition(blackboardKeyHasValue('unit.target'))
      .selector()
        .invert(inRange(5))
        .insert(moveToPoint((blackboard => blackboard.unit.target)))
      .end()
      .action(interactTarget())
    .end()
    .build()

// Checking if interaction was successful could be out-of-scope for this function because a successful interaction could be different depending on the unit. Ie waypoint screen vs npc chat box
// We could pass in the thing that checks the result as an argument?
