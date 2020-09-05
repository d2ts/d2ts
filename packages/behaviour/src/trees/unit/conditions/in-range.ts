import {ConditionLeaf} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import {createLogger} from '@/logger'
import {ValueProvider} from '@/blackboard/value-provider.type'

const logger = createLogger('inRange')

export const inRange = (
  range: number,
  unitProvider?: ValueProvider
): ConditionLeaf<Blackboard> =>
  new ConditionLeaf((blackboard: Blackboard) => {
    const unitToCompare = unitProvider ? unitProvider(blackboard) : me
    const isInRange =
      getDistance(unitToCompare, blackboard.unit.target) <= range

    logger.debug(
      `Unit '${blackboard.unit.target.name}' is within ${range} range of ${unitToCompare.name}: ${isInRange}`
    )

    return isInRange
  })
