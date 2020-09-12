enum clickMapType {
  Left,
  Right,
  // Not sure about these but clickMap can take a parameter of 3 for casting the current right hand skill.
  CastLeftSkill,
  CastRightSkill,
}

export const click = (
  coordinates: Point,
  shift: boolean = false,
  clickType: clickMapType = clickMapType.Left
) => {
  clickMap(clickType, shift, coordinates.x, coordinates.y)
  delay(20)
  clickMap(clickType + 2, shift, coordinates.x, coordinates.y)
}
