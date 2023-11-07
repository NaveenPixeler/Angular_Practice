export class Comment {
  constructor(
    public userId: number,
    public user: string,
    public comment: string,
    public likesCount: number 
  ) {}
}
