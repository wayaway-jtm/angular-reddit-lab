import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedditFeedComponent } from './reddit-feed/reddit-feed.component';
import { RedditFetchService } from './reddit-fetch.service';
import { RedditPostComponent } from './reddit-post/reddit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditFeedComponent,
    RedditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ RedditFetchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }