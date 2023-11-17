import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './basics/directives/directives.component';
import { FormsModule } from '@angular/forms';
import { ManualComponent } from './basics/manual/manual.component';
import { ProfileComponent } from './profile/profile.component';
import { BioComponent } from './profile/bio/bio.component';
import { FollowersComponent } from './profile/followers/followers.component';
import { FollowingComponent } from './profile/following/following.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './post/comments/comments.component';
import { LikesComponent } from './post/likes/likes.component';
import { PostDateService } from './services/post-date.service';
import { PipesComponent } from './basics/pipes/pipes.component';
import { HooksComponent } from './basics/hooks/hooks.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    ManualComponent,
    ProfileComponent,
    BioComponent,
    FollowersComponent,
    FollowingComponent,
    PostComponent,
    CommentsComponent,
    LikesComponent,
    PipesComponent,
    HooksComponent,
    HeaderComponent,
    BasicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [PostDateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
