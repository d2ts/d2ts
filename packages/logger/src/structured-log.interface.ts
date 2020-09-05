import {LogLevel} from './log-level.enum'

export interface StructuredLog {
  level: LogLevel
  message: string
  name: string
  time: Date
}
