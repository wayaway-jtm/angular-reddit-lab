import { Component, OnInit } from '@angular/core';
import { RedditFetchService } from '../reddit-fetch.service';

@Component({
  selector: 'app-reddit-feed',
  templateUrl: './reddit-feed.component.html',
  styleUrls: ['./reddit-feed.component.css']
})
export class RedditFeedComponent implements OnInit {

  constructor(private redditService: RedditFetchService) { }

  ngOnInit() {
  }

}
