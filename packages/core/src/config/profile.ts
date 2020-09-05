import {GameMode} from './enums'

export interface Profile {
  accountName?: string
  password?: string
  characterName: string
  gameMode: GameMode
}
