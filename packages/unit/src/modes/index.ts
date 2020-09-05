import {HeroModeProvider} from './hero'
import {ModeProvider} from './interfaces'

const providers: ModeProvider<Unit>[] = [new HeroModeProvider()]

export const isMoving = (unit: UnitType) => providers[unit.type].isMoving(unit)
export const isCasting = (unit: UnitType) => providers[unit.type].isCasting(unit)