// Credits: dzik
export enum UiFlag {
  GAME = 0x00, //Game
  INVENTORY = 0x01, //Player Inventory
  STATSCREEN = 0x02, //Player Stat Screen
  SKILLSELECT = 0x03, //Skill Selection
  SKILLTREE = 0x04, //Player Skill Tree
  CHATBOX = 0x05, //Chat Box
  NEWSTATS = 0x06, //New Stats Button
  NEWSKILLS = 0x07, //New Skills Button
  NPCMENU = 0x08, //NPC options menu
  ESCMENU = 0x09, //Esc Menu
  AUTOMAP = 0x0a, //Automap
  CONFIG = 0x0b, //Key Configuration Menu
  NPCSHOP = 0x0c, //NPC Trade
  HOLDALT = 0x0d, //Alt Items Highlight
  ANVIL = 0x0e, //Anvil
  QUESTSCREEN = 0x0f, //Quest Screen
  QUESTSCROLL = 0x10, //Inifuss Scroll
  QUESTLOG = 0x11, //Quest Log Red Button
  NODRAW = 0x12, //Draw GUI
  HIREABLES = 0x13, //Hireables Icons
  WAYPOINT = 0x14, //Waypoint Screen
  MINIPANEL = 0x15, //CtrlPnl7 Mini Popop Menu
  PARTYSCREEN = 0x16, //Multiplayer Party Screen
  MPTRADE = 0x17, //Multiplayer Trade
  MSGLOG = 0x18, //Messages Log
  STASH = 0x19, //Player Stash
  CUBE = 0x1a, //Horadric Cube
  STEEGSTONE = 0x1b, //Guild Steeg Stone
  GUILDVAULT = 0x1c, //Guild Vault
  UNKNOWN29 = 0x1d, //Unknown
  BELTROWS = 0x1f, //Belt Rows Popup
  HELPSCREEN = 0x21, //Help Screen
  HELPSCREENBTN = 0x22, //New Game Help Screen Red Button
  HIREICONS = 0x23, //Party Icons
  MERCINV = 0x24, //Mercenary Inventory
  RECIPESCROLL = 0x25, //Unused Recipe Scroll
}

export enum KeyId {
  Backspace = 8,
  Enter = 13,
  Escape = 27,
}
