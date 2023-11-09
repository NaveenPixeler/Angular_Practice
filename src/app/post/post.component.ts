import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from './post.model';
import { Comment } from './comments/comment.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements OnInit {
  posts: Post[] = [
    new Post(
      1,
      'https://images.unsplash.com/photo-1685287919409-7a785eb69ba2?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      "Here's the Poster for the Day.",
      false,
      false,
      false
    ),
    new Post(
      2,
      'https://images.unsplash.com/photo-1696945147512-745188d0ef77?auto=format&fit=crop&q=80&w=2564&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Some Blurry stuff goes here!',
      false,
      false,
      false
    ),
  ];

  comments: Comment[] = [
    new Comment(1, 'naveen', "It's a Comment", false),
    new Comment(2, 'tom', "It's a Comment", false),
    new Comment(3, 'toe', "It's a Comment", false),
  ];

  constructor() {
  
  }

  ngOnInit(): void {
    
  }

  toggleLikeButton(index: number) {
    this.posts[index].isLiked = !this.posts[index].isLiked;
  }

  toggleComment(i: number) {
    this.posts[i].isCommentOpened = !this.posts[i].isCommentOpened;
  }

  onDoubleClickToLike(index: number) {
    this.posts[index].isLiked = true;
    this.posts[index].anime = true;

    setTimeout(() => {
      this.posts[index].anime = false;
    }, 1000);
  }

  ReceiveComment(event: string) {
    let lastCommentId = this.comments[this.comments.length - 1].userId;
    this.comments.push(new Comment(++lastCommentId, 'naveen', event, false));
  }
}
