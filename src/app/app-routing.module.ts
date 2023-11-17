import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { BasicsComponent } from './basics/basics.component';

const routes: Routes = [
  {
    path: "",
    component: PostComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "basics",
    component: BasicsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
