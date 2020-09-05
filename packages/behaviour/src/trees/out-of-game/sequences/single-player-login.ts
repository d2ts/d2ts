import {Node, FluentBehaviourTreeBuilder} from '@d2ts/ts-fluent-bt'
import {GameMode} from '@d2ts/core'
import {checkOogLocation, checkGameMode} from '@/trees/out-of-game/conditions'
import {OutOfGameLocation, FindableUiWidget} from '@/trees/out-of-game/enums'
import {
  findAndClickUiWidget,
  loginCharacter,
} from '@/trees/out-of-game/sequences'
import {Blackboard} from '@/blackboard'

const builder = new FluentBehaviourTreeBuilder()

export const singlePlayerLogin = (): Node<Blackboard> =>
  // prettier-ignore
  builder
    .sequence()
      .condition(checkGameMode(GameMode.SinglePlayer))
      .condition(checkOogLocation(OutOfGameLocation.MainMenu))
      .insert(findAndClickUiWidget(FindableUiWidget.MainMenuSinglePlayer))
      .insert(loginCharacter())
    .end()
    .build()
