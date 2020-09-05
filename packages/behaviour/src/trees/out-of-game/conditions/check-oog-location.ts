import {ConditionLeaf} from '@d2ts/ts-fluent-bt'
import {OutOfGameLocation} from '@/trees/out-of-game/enums'
import {Blackboard} from '@/blackboard'
import {createLogger} from '@/logger'

const logger = createLogger('checkOogLocation')

export const checkOogLocation = (
  location: OutOfGameLocation
): ConditionLeaf<Blackboard> =>
  new ConditionLeaf(() => {
    logger.debug(`Checking OOG location: ${location}`)

    return getLocation() === location
  })
