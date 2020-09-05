enum ButtonType {
  Left,
  Right,
}

export const click = (
  coordinates: Point,
  shift: boolean = false,
  clickType: ButtonType = ButtonType.Left
) => {
  clickMap(clickType, shift, coordinates.x, coordinates.y)
  delay(50)
  clickMap(clickType + 2, shift, coordinates.x, coordinates.y)
}
