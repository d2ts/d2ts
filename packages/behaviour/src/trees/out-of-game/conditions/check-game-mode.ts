import {ConditionLeaf} from '@d2ts/ts-fluent-bt'
import {GameMode} from '@d2ts/core'
import {Blackboard} from '@/blackboard'
import {createLogger} from '@/logger'

const logger = createLogger('checkGameMode')

export const checkGameMode = (gameMode: GameMode): ConditionLeaf<Blackboard> =>
  new ConditionLeaf((blackboard: Blackboard) => {
    logger.debug(`Checking game mode: ${gameMode}`)

    return blackboard.config.profile.gameMode === gameMode
  })
