import {ModeProvider} from './interfaces'

export enum HeroMode {
  Dying,
  IdleOutsideTown,
  Walking,
  Running,
  GettingHit,
  IdleInTown,
  WalkingInTown,
  Attacking1,
  Attacking2,
  Blocking,
  Casting,
  Throwing,
  Kicking,
  Skill1,
  Skill2,
  Skill3,
  Skill4,
  Dead,
  Sequence,
  KnockBack,
}

export class HeroModeProvider implements ModeProvider<Hero> {
  isAttacking(unit: Hero): boolean {
    return [
      HeroMode.Attacking1,
      HeroMode.Attacking2,
      HeroMode.Casting,
      HeroMode.Throwing,
      HeroMode.Kicking,
      HeroMode.Skill1,
      HeroMode.Skill2,
      HeroMode.Skill3,
      HeroMode.Skill4,
      HeroMode.Sequence,
    ].includes(unit.mode)
  }

  isCasting(unit: Hero): boolean {
    return unit.mode === HeroMode.Casting
  }

  isMoving(unit: Hero): boolean {
    return [
      HeroMode.Walking,
      HeroMode.Running,
      HeroMode.WalkingInTown,
    ].includes(unit.mode)
  }

  isDead(unit: Hero): boolean {
    return [HeroMode.Dying, HeroMode.Dead].includes(unit.mode)
  }
}
