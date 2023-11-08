export class Comment {
  constructor(
    public userId: number,
    public user: string,
    public description: string,
    public isOpened: boolean
  ) {}
}
