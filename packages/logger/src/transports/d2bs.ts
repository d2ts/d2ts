import {Transport} from './transport.interface'
import {StructuredLog} from '../structured-log.interface'
import {LogLevel} from '../log-level.enum'

export class D2bsTransport implements Transport {
  private readonly LOGLEVEL_COLOR_MAP = {
    [LogLevel.Debug]: 0,
    [LogLevel.Info]: 4,
    [LogLevel.Warning]: 8,
    [LogLevel.Error]: 1,
  }

  private readonly DIABLO_COLOR_PREFIX = 'ÿc'

  public handleLog(log: StructuredLog): void {
    print(this.parseLog(log))
  }

  private parseLog(log: StructuredLog): string {
    const colorPrefix = `${this.DIABLO_COLOR_PREFIX}${
      this.LOGLEVEL_COLOR_MAP[log.level]
    }`
    const timestamp = this.buildTimestamp(log.time)

    return `${colorPrefix}${timestamp} ${log.level} [${log.name}] ${log.message}`
  }

  private buildTimestamp(time: Date): string {
    const date = time.getDate()
    const month = time.getMonth() + 1
    const year = time.getFullYear()
    const hour = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()

    return `${date}/${month}/${year} ${hour}:${minute}.${second}`
  }
}
