import {OutOfGameManager} from '@d2ts/core'
import {D2BotMessage} from './interfaces'
import {D2BotCommand, D2BotConsoleTextColor} from './enums'

export class D2Bot implements OutOfGameManager {
  private readonly HEARTBEAT_DELAY = 2000
  private readonly DEFAULT_MESSAGE_MODE = 0
  private readonly heartbeatHandle = null

  constructor(private d2BotHandle: number) {
    this.heartbeatHandle = setInterval(
      () => this.heartbeat(),
      this.HEARTBEAT_DELAY
    )
  }

  private sendToD2Bot(
    message: D2BotMessage,
    messageMode: number = this.DEFAULT_MESSAGE_MODE
  ): void {
    sendCopyData(null, this.d2BotHandle, messageMode, JSON.stringify(message))
  }

  public printToConsole(
    msg: string,
    color: D2BotConsoleTextColor = D2BotConsoleTextColor.Black,
    tooltip = '',
    trigger = ''
  ): void {
    const printPayload = {msg, color, tooltip, trigger}
    const message = {
      profile: me.profile,
      func: D2BotCommand.PrintToConsole,
      args: [JSON.stringify(printPayload)],
    }

    this.sendToD2Bot(message)
  }

  public start(profile: string): void {
    const message = {
      profile: me.profile,
      func: D2BotCommand.Start,
      args: [profile],
    }

    this.sendToD2Bot(message)
  }

  public stop(profile: string): void {
    const message = {
      profile: me.profile,
      func: D2BotCommand.Stop,
      args: [profile],
    }

    this.sendToD2Bot(message)
  }

  public restart(profile: string, swapKey?: boolean): void {
    const args: [string, boolean?] = [profile]

    if (swapKey) {
      args.push(swapKey)
    }

    const message = {
      profile: me.profile,
      func: D2BotCommand.Restart,
      args,
    }

    this.sendToD2Bot(message)
  }

  private heartbeat(): void {
    const message = {
      profile: me.profile,
      func: D2BotCommand.Heartbeat,
      args: [],
    }

    this.sendToD2Bot(message)
  }

  public static createInstance(): D2Bot {
    let d2botHandle = null

    const listener = addEventListener('copydata', (mode, message) => {
      if (message === 'Handle' && !d2botHandle) {
        d2botHandle = mode
      }
    })

    while (!d2botHandle) {
      delay(50)
    }

    removeEventListener(listener)

    return new D2Bot(d2botHandle)
  }
}
