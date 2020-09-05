export const isMorphed = (unit: Hero) => [UnitState.wolf, UnitState.bear].every(s => unit.getState(s))

export enum UnitState {
  none = 0,
  freeze = 1,
  poison = 2,
  resistfire = 3,
  resistcold = 4,
  resistlight = 5,
  resistmagic = 6,
  playerbody = 7,
  resistall = 8,
  amplifydamage = 9,
  frozenarmor = 10,
  cold = 11,
  inferno = 12,
  blaze = 13,
  bonearmor = 14,
  concentrate = 15,
  enchant = 16,
  innersight = 17,
  skill_move = 18,
  weaken = 19,
  chillingarmor = 20,
  stunned = 21,
  spiderlay = 22,
  dimvision = 23,
  slowed = 24,
  fetishaura = 25,
  shout = 26,
  taunt = 27,
  conviction = 28,
  convicted = 29,
  energyshield = 30,
  venomclaws = 31,
  battleorders = 32,
  might = 33,
  prayer = 34,
  holyfire = 35,
  thorns = 36,
  defiance = 37,
  thunderstorm = 38,
  lightningbolt = 39,
  blessedaim = 40,
  stamina = 41,
  concentration = 42,
  holywind = 43,
  holywindcold = 44,
  cleansing = 45,
  holyshock = 46,
  sanctuary = 47,
  meditation = 48,
  fanaticism = 49,
  redemption = 50,
  battlecommand = 51,
  preventheal = 52,
  conversion = 53,
  uninterruptable = 54,
  ironmaiden = 55,
  terror = 56,
  attract = 57,
  lifetap = 58,
  confuse = 59,
  decrepify = 60,
  lowerresist = 61,
  openwounds = 62,
  dopplezon = 63,
  criticalstrike = 64,
  dodge = 65,
  avoid = 66,
  penetrate = 67,
  evade = 68,
  pierce = 69,
  warmth = 70,
  firemastery = 71,
  lightningmastery = 72,
  coldmastery = 73,
  swordmastery = 74,
  axemastery = 75,
  macemastery = 76,
  polearmmastery = 77,
  throwingmastery = 78,
  spearmastery = 79,
  increasedstamina = 80,
  ironskin = 81,
  increasedspeed = 82,
  naturalresistance = 83,
  fingermagecurse = 84,
  nomanaregen = 85,
  justhit = 86,
  slowmissiles = 87,
  shiverarmor = 88,
  battlecry = 89,
  blue = 90,
  red = 91,
  death_delay = 92,
  valkyrie = 93,
  frenzy = 94,
  berserk = 95,
  revive = 96,
  itemfullset = 97,
  sourceunit = 98,
  redeemed = 99,
  healthpot = 100,
  holyshield = 101,
  just_portaled = 102,
  monfrenzy = 103,
  corpse_nodraw = 104,
  alignment = 105,
  manapot = 106,
  shatter = 107,
  sync_warped = 108,
  conversion_save = 109,
  pregnant = 110,
  unknown = 111,
  rabies = 112,
  defense_curse = 113,
  blood_mana = 114,
  burning = 115,
  dragonflight = 116,
  maul = 117,
  corpse_noselect = 118,
  shadowwarrior = 119,
  feralrage = 120,
  skilldelay = 121,
  progressive_damage = 122,
  progressive_steal = 123,
  progressive_other = 124,
  progressive_fire = 125,
  progressive_cold = 126,
  progressive_lightning = 127,
  shrine_armor = 128,
  shrine_combat = 129,
  shrine_resist_lightning = 130,
  shrine_resist_fire = 131,
  shrine_resist_cold = 132,
  shrine_resist_poison = 133,
  shrine_skill = 134,
  shrine_mana_regen = 135,
  shrine_stamina = 136,
  shrine_experience = 137,
  fenris_rage = 138,
  wolf = 139,
  bear = 140,
  bloodlust = 141,
  changeclass = 142,
  attached = 143,
  hurricane = 144,
  armageddon = 145,
  invis = 146,
  barbs = 147,
  wolverine = 148,
  oaksage = 149,
  vine_beast = 150,
  cyclonearmor = 151,
  clawmastery = 152,
  cloak_of_shadows = 153,
  recycled = 154,
  weaponblock = 155,
  cloaked = 156,
  quickness = 157,
  bladeshield = 158,
  fade = 159,
}
