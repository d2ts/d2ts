import {ActionLeaf, NodeState} from '@d2ts/ts-fluent-bt'
import {Blackboard} from '@/blackboard'
import {createLogger} from '@/logger'

const logger = createLogger('interactTarget')

export const interactTarget = () =>
  new ActionLeaf<Blackboard>((blackboard: Blackboard) => {
    const {target} = blackboard.unit

    logger.debug(`Interacting with ${target.name}`)

    target.interact()

    return NodeState.Succeeded
  })
