import {ActionLeaf, NodeState} from '@d2ts/ts-fluent-bt'
import {AreaId} from '@d2ts/pathing'
import {Blackboard} from '@/blackboard'
import {createLogger} from '@/logger'

const logger = createLogger('useWaypoint')

export const useWaypoint = (targetArea: AreaId) =>
  new ActionLeaf<Blackboard>((blackboard: Blackboard) => {
    logger.debug(`Taking waypoint to location: ${targetArea}`)

    const waypoint = getUnit(2, 'waypoint')

    if (!waypoint) {
      logger.debug('Failed to find waypoint')

      return NodeState.Failed
    }

    waypoint.interact(targetArea)

    return NodeState.Succeeded
  })
