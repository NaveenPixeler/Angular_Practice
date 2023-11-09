import { Component, Input, ElementRef, HostListener, Renderer2, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Comment } from './comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() comments: Comment[] = [];
  @Output() sendComment = new EventEmitter<string>();
  @ViewChild('comment') commentInput!: ElementRef;

  showBox = false;
  boxLeft = '0px';
  boxTop = '0px';
  commentsCount: number = 0;

  showTooltip(event: MouseEvent) {
    this.showBox = true;
    this.boxLeft = `${event.clientX}px`;
    this.boxTop = `${event.clientY}px`;
  }
  
  constructor() { }

  ngOnInit(): void {}

  onAddCommnet() {
    const comment = this.commentInput.nativeElement.value
    if(comment) {
      this.sendComment.emit(comment);
    }
    this.commentInput.nativeElement.value = "";
  }
}
