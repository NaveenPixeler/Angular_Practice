import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { LikesComponent } from './post/likes/likes.component';

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
    CommentsComponent,
    LikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
