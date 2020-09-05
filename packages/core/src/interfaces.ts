export interface OutOfGameManager {
  start: (profile: string) => void
  stop: (profile: string) => void
}
