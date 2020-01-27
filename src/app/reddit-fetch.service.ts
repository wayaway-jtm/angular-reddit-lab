import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedditFetchService {

  constructor(private http: HttpClient) { }

  fetchSubreddit(subredditName: string = 'awww') {
    return this.http.get(`http://www.reddit.com/r/${subredditName}/.json?limit=10`);
  }
}
