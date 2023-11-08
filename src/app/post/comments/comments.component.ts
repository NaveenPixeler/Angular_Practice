import { Component, Input, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';
import { Comment } from './comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() comments: Comment[] = [];
  showBox = false;
  boxLeft = '0px';
  boxTop = '0px';

  showTooltip(event: MouseEvent) {
    this.showBox = true;
    this.boxLeft = `${event.clientX}px`;
    this.boxTop = `${event.clientY}px`;
  }
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    console.log("comments",this.comments);
  }
}
