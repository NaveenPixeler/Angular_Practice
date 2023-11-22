import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css'],
})
export class FollowersComponent implements OnInit {
  userId: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUserIdViaRouterLink();
  }

  getUserIdViaRouterLink() {
    this.route.params.subscribe((params) => {
      this.userId = +params['userId'];
      console.log(this.userId)
    });
  }
}
