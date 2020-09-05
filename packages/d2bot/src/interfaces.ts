import {D2BotCommand} from './enums'

export interface D2BotMessage {
  profile: string
  func: D2BotCommand
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: any[]
}
