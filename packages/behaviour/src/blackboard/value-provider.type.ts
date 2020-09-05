import {Blackboard} from './blackboard'

export type ValueProvider<T = any> = (blackboard: Blackboard) => T
