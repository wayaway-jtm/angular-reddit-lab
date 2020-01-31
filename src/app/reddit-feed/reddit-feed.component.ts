import { Component, OnInit, Input } from '@angular/core';
import { RedditFetchService } from '../reddit-fetch.service';

@Component({
  selector: 'app-reddit-feed',
  templateUrl: './reddit-feed.component.html',
  styleUrls: ['./reddit-feed.component.css']
})
export class RedditFeedComponent implements OnInit {

  posts : [];
  mainInput: string = '';

  constructor(private redditService: RedditFetchService) {
  }

  ngOnInit() {
    // this.redditService.fetchSubreddit().subscribe((data: any) => console.log(data));
    this.redditService.fetchSubreddit().subscribe((data: any) => this.posts = data.data.children);
  }

  viewNewSubreddit() {
    this.redditService.fetchSubreddit(this.mainInput).subscribe((data: any) => this.posts = data.data.children);
  }

}
