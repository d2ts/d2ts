import {D2bsTransport, FileTransport, Transport} from './transports'
import {LogLevel} from './log-level.enum'
import {StructuredLog} from './structured-log.interface'

export class Logger {
  private readonly transports: Transport[] = [
    new D2bsTransport(),
    new FileTransport(),
  ]

  constructor(private readonly name: string) {}

  public debug(message: string): void {
    this.log(message, LogLevel.Debug)
  }

  public info(message: string): void {
    this.log(message, LogLevel.Info)
  }

  public warning(message: string): void {
    this.log(message, LogLevel.Warning)
  }

  public error(message: string): void {
    this.log(message, LogLevel.Error)
  }

  private log(message: string, level: LogLevel): void {
    const structuredLog = this.buildStructuredLog(message, level)

    this.transports.forEach((transport) => transport.handleLog(structuredLog))
  }

  private buildStructuredLog(message: string, level: LogLevel): StructuredLog {
    return {
      time: new Date(),
      name: this.name,
      message,
      level,
    }
  }

  public static createLogger(name: string): Logger {
    return new Logger(name)
  }
}
