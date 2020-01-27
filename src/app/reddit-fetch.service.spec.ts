import { TestBed } from '@angular/core/testing';

import { RedditFetchService } from './reddit-fetch.service';

describe('RedditFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedditFetchService = TestBed.get(RedditFetchService);
    expect(service).toBeTruthy();
  });
});
