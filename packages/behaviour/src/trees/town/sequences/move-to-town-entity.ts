import {Node} from '@d2ts/ts-fluent-bt'
import {getTownEntity, TownEntity} from '@d2ts/town'
import {Blackboard} from '@/blackboard'
import {moveToPoint} from '@/trees/pathing'

export const moveToTownEntity = (entity: TownEntity): Node<Blackboard> =>
  moveToPoint(() => getTownEntity(entity).coordinates)
