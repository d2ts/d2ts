import '@d2ts/polyfill'
import {D2Bot, D2BotConsoleTextColor} from '@d2ts/d2bot'
import {GameMode} from '@d2ts/core'
import * as b from '@d2ts/behaviour'
import {Blackboard} from '@d2ts/behaviour'
import {Logger} from '@d2ts/logger'
import {FluentBehaviourTreeBuilder} from '@d2ts/ts-fluent-bt'

const builder = new FluentBehaviourTreeBuilder<Blackboard>()
const logger = Logger.createLogger('D2ts')
const d2bot = D2Bot.createInstance()
const blackboard: Blackboard = {
  config: {
    profile: {
      characterName: 'test',
      gameMode: GameMode.SinglePlayer,
    },
  },
  uiWidget: {
    target: null,
    setText: '',
    targetName: '',
  },
  pathing: {
    debug: true,
    useTeleport: true,
    path: [],
    pathIndex: 0,
    targetPoint: undefined,
  },
  unit: {
    target: null,
  },
}

let inGame = false

const testNode = builder
  .selector()
  .sequence()
  .timeout(10000)
  .condition(() => getUIFlag(0x14))
  .end()
  .condition(() => {
    logger.debug('condition met')
    return true
  })
  .end()
  .condition(() => {
    logger.debug('timeout reached')
    return true
  })
  .end()
  .build()

// const pathingNode = builder
//   .sequence()
//   .insert(b.pathing.takeWaypoint(3))
//   .condition((bb) => {
//     inGame = false
//     return true
//   })
//   .end()
//   .build()

const pathingNode = builder
  .sequence()
  // .condition(core.isInGame())
  .insert(b.pathing.moveToExit(2))
  .condition((bb) => {
    inGame = false
    return true
  })
  .end()
  .build()

const commandMap = {
  pathnode: false,
  testnode: false,
}

addEventListener('chatmsg', (playerName, message) => {
  if (commandMap.hasOwnProperty(message)) {
    logger.info('toggling node ' + message)
    commandMap[message] = !commandMap[message]
  }
})

addEventListener('keyup', (key) => {
  if (key === 96) {
    inGame = !inGame
  }
  if (key === 97) {
    for (let i = 0; i < 200; i += 1) {
      const levelName = getBaseStat('levels', i, 'LevelName')
      if (levelName) {
        print(levelName)
      }
    }
  }
})

showConsole()
logger.info('Running example..')
d2bot.printToConsole('D2TS example is now running!', D2BotConsoleTextColor.Blue)

const rootNode = b.outOfGame.rootOutOfGame()

while (true) {
  rootNode.tick(blackboard)

  if (inGame) {
    pathingNode.tick(blackboard)
  }

  if (commandMap.testnode) {
    testNode.tick(blackboard)
  }

  delay(10)
}
