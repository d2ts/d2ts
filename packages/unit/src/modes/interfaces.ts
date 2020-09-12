export interface ModeProvider<T extends Unit> {
  isMoving: (unit: T) => boolean
  isCasting: (unit: T) => boolean
  isDead: (unit: T) => boolean
  isAttacking: (unit: T) => boolean
}
