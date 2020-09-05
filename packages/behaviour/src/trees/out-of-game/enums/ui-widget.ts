export class FindableUiWidget {
  public static readonly MainMenuSinglePlayer = new FindableUiWidget(
    'MainMenuSinglePlayer',
    6,
    264,
    324,
    272,
    35
  )

  private constructor(
    public readonly name: string,
    public readonly type: number,
    public readonly x: number,
    public readonly y: number,
    public readonly sizex: number,
    public readonly sizey: number
  ) {}
}
