import {Transport} from './transport.interface'
import {StructuredLog} from '../structured-log.interface'

// TODO:
// See: https://github.com/serilog/serilog-formatting-compact
interface ClefLog {
  '@t': string
  '@m': string
  '@l': string
}

export class FileTransport implements Transport {
  private currentBatchSize = 0
  private currentBatch = ''

  handleLog(log: StructuredLog): void {
    this.currentBatchSize += 1

    this.currentBatch += `${this.parseLog(log)}\n`

    if (this.currentBatchSize >= this.batchSize) {
      this.currentBatchSize = 0

      FileTools.appendText(this.logFile, this.currentBatch)

      this.currentBatch = ''
    }
  }

  private get logFile(): string {
    return `logs/${me.profile}.txt`
  }

  // TODO: Remove and eventually log as JSON.
  private parseLog(log: StructuredLog): string {
    const timestamp = this.buildTimestamp(log.time)

    return `${timestamp} ${log.level} ${log.name}: ${log.message}`
  }

  // TODO: Remove and eventually log as JSON.
  private buildTimestamp(time: Date): string {
    const date = time.getDate()
    const month = time.getMonth() + 1
    const year = time.getFullYear()
    const hour = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()

    return `${date}/${month}/${year} ${hour}:${minute}.${second}`
  }

  // TODO: Should the batch size depend on the level of logging?
  // For example if we're set to debug log we're gonna get tonnes of logs every second but if we're set to info logging
  // the logs will be less frequent so the batch size should maybe be smaller?
  private get batchSize() {
    return 20
  }
}
