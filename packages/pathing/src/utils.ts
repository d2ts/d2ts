import {AreaId} from '@/enums'
import {MpqTable} from '@d2ts/core'

export const getAreaName = (area: AreaId) =>
  getBaseStat(MpqTable.Levels, area, 'LevelName')
