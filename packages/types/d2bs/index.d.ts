type Act = 1 | 2 | 3 | 4 | 5
type UnitTypeId = 0 | 1 | 2 | 3 | 4 | 5
// Alignment: Left | Right | Center
type ScreenHookAlignment = 0 | 1 | 2
type ScreenHookOnClick = () => void
type ScreenHookOnHover = () => void

declare class ScreenHook {
  x: number
  y: number
  xsize: number
  ysize: number
  visible: boolean
  zorder: number
  click: ScreenHookOnClick
  hover: ScreenHookOnHover
  remove: () => void
}

declare class Frame extends ScreenHook {
  constructor(
    x: number,
    y: number,
    xsize: number,
    ysize: number,
    alignment: ScreenHookAlignment,
    automap: boolean,
    click?: ScreenHookOnClick,
    hover?: ScreenHookOnHover
  )
  align: ScreenHookAlignment
}

declare class Box extends ScreenHook {
  constructor(
    x: number,
    y: number,
    xsize: number,
    ysize: number,
    color: number,
    opacity: number,
    align: ScreenHookAlignment,
    automap: boolean,
    click?: ScreenHookOnClick,
    hover?: ScreenHookOnHover
  )
  opacity: number
  align: ScreenHookAlignment
}

declare class Line extends ScreenHook {
  constructor(
    x: number,
    y: number,
    x2: number,
    y2: number,
    color: number,
    automap: boolean,
    click?: ScreenHookOnClick,
    hover?: ScreenHookOnHover
  )
  x2: number
  y2: number
  color: number
}

declare class Text extends ScreenHook {
  constructor(
    text: string,
    x: number,
    y: number,
    color: number,
    font: number,
    align: ScreenHookAlignment,
    automap: boolean,
    click?: ScreenHookOnClick,
    hover?: ScreenHookOnHover
  )
  font: number
  text: string
  align: ScreenHookAlignment
}

declare const enum PathReducer {
  Walk,
  Teleport,
  None,
  JavaScript,
}

interface LinkedList<T> {
  getNext(): T
}

interface Point {
  x: number
  y: number
}

interface D2bsEventHandlerMap {
  copydata: (mode: number, message: string) => void
  scriptmsg: (msg: string) => void
  keyup: (key: number) => void
  keydown: (key: number) => void
  chatmsg: (playerName: string, message: string) => void
}

declare class Exit implements Point {
  target: number
  x: number
  y: number
  type: number
  tileid: number
  level: number
}

declare class Area implements Point {
  id: number
  name: string
  x: number
  y: number
  xsize: number
  ysize: number
  exits: Exit[]
}

declare class Unit implements Point {
  type: UnitTypeId
  gid: number
  name: string
  act: Act
  area: number
  roomx: number
  roomy: number
  x: number
  y: number
  getState(stateId: number): boolean
  /**
   * 0: Get right skill name
   * 1: Get left skill name
   * 2: Get right skill id
   * 3: Get left skill id
   * 4: Get an array with a [skillId, baseSkillLevel, totalSkillLevel] entry for every skill
   */
  getSkill(mode: 0 | 1 | 2 | 3 | 4): number | string | [number, number, number]
  // If addItemSkillLevels == 0 then return base skill level.
  // If addItemSkillLevels != 0 then return base skill level + skill levels gained by items(?).
  getSkill(
    skillId: number,
    addItemSkillLevels?: number,
    isCharged?: boolean
  ): number
  // statCompliment is used as an argument to the stat parameter.
  // For example me.getStat(UnitStat.item_nonclassskill, Skill.teleport) will get the amount of nonclassskill teleport skills we have.
  getStat(statId: number, statCompliment?: number): number
  // hand is a truthy number. 0 = right, hand>0 = left.
  setSkill(skillId: number, hand?: number, itemWithCharges?: Item): boolean
  inTown: boolean
  // targetArea is only used if the unit is a waypoint.
  interact: (targetArea?: number) => undefined
}

declare class Hero extends Unit {
  type: 0
  mode: number
}

declare class Npc extends Unit {
  type: 1
}

declare class WorldObject extends Unit {
  type: 2
}

declare class Missile extends Unit {
  type: 3
}

declare class Item extends Unit {
  type: 4
}

declare class Me extends Hero {
  ingame: boolean
  gameReady: boolean
  profile: string
  ping: number
  mp: number
  hp: number
}

type UnitType = Hero | Npc | WorldObject | Item

declare class UiWidget implements LinkedList<UiWidget> {
  type: number
  x: number
  y: number
  sizex: number
  sizey: number
  getNext(): UiWidget | undefined
  click(): void
  click(targetx: number, targety: number): void
  setText(text: string): void
  getText(): string | any[]
}

declare class FileTools {
  public static writeText(filePath: string, text: string): boolean
  public static appendText(filePath: string, text: string): boolean
  public static exists(filePath: string): boolean
  public static readText(filePath: string): string
}

declare function getPresetUnit(
  areaId: number,
  unitType: UnitTypeId,
  unitId: number
): Unit | undefined
declare function getUnit(
  unitType: UnitTypeId,
  name?: string,
  mode?: number,
  unitGid?: number
)
declare function getUnit(
  unitType: UnitTypeId,
  classId?: number,
  mode?: number,
  unitGid?: number
)
declare function addEventListener<K extends keyof D2bsEventHandlerMap>(
  evt: K,
  handler: D2bsEventHandlerMap[K]
): number
declare function removeEventListener(evtHandle: number): void
declare function setInterval(cb: () => void, intervalMs: number): number
declare function clearInterval(intervalHandle: number): void
declare function sendCopyData(
  windowHandle: number | string | null,
  windowName: string | number,
  mode: number,
  data: string
): number
declare function print(...objs: any[]): void
declare function delay(sleepMs: number): void
declare function getControl(
  type: number,
  x: number,
  y: number,
  sizex: number,
  sizey: number
): UiWidget | undefined
declare function getLocation(): number
declare function getUIFlag(flagId: number): boolean
declare function showConsole(): void
declare function sendKey(keyId: number): void
declare function clickMap(
  buttonType: number,
  shift: boolean,
  x: number,
  y: number
)
declare function clickMap(buttonType: number, shift: boolean, unit: UnitType)
declare function getBaseStat(txtFile: string, row: number, columnHeader: string)
declare function getDistance(a: Point, b: Point): number
declare function getArea(): Area
declare function getArea(areaId: number): Area
declare function getPath(
  areaId: number,
  destinationX: number,
  destinationY: number,
  startX: number,
  startY: number,
  reducer: PathReducer,
  radius: number
): Point[]

declare const me: Me
