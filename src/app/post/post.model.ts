export class Post {
  constructor(
    public postId: number,
    public image: string,
    public caption: string,
    public isLiked: boolean,
    public anime: boolean,
    public isCommentOpened: boolean
  ) {}
}
