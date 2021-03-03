import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as editJsonFile from 'edit-json-file';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoComponent } from './video/video.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { CommentsComponent } from './comments/comments.component';
import { InfoComponent } from './info/info.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { MainComponent } from './main/main.component';
import { CommentComponent } from './comments/comment/comment.component';
import { InfoArtistComponent } from './info/info-artist/info-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoComponent,
    RecommendationComponent,
    CommentsComponent,
    InfoComponent,
    AdvertisementComponent,
    MainComponent,
    CommentComponent,
    InfoArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
