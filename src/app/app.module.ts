import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ManualComponent } from './manual/manual.component';
import { ProfileComponent } from './profile/profile.component';
import { BioComponent } from './profile/bio/bio.component';
import { FollowersComponent } from './profile/followers/followers.component';
import { FollowingComponent } from './profile/following/following.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './post/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    HeaderComponent,
    ManualComponent,
    ProfileComponent,
    BioComponent,
    FollowersComponent,
    FollowingComponent,
    PostComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
