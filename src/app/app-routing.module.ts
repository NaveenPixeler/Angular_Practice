import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { BasicsComponent } from './basics/basics.component';
import { FollowersComponent } from './profile/followers/followers.component';
import { FollowingComponent } from './profile/following/following.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {
    path: 'posts',
    component: PostComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: 'followers', component: FollowersComponent },
      { path: 'following', component: FollowingComponent },
    ],
  },
  {
    path: 'basics',
    component: BasicsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
