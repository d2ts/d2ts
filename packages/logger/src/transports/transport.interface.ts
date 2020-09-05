import {StructuredLog} from '../structured-log.interface'

export interface Transport {
  handleLog: (log: StructuredLog) => void
}
