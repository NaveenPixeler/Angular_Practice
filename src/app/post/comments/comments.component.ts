import { Component } from '@angular/core';
import { Comment } from './comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  comments: Comment[] = [
    new Comment(1, 'Naveen', "It's Comment", 3),
    new Comment(2, 'Tom', "It's Comment", 2),
    new Comment(3, 'Toe', "It's Comment", 1),
  ];
}
