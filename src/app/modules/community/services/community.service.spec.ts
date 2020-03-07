import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { mockedPosts } from '../tests/community-testing.service';
import { CommunityService } from './community.service';

describe('CommunityService', () => {
  let service: CommunityService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(CommunityService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert response to StackOverflowPosts', done => {
    const data = { items: mockedPosts };
    service.getStackOverflowPosts().subscribe(posts => {
      expect(posts.length).toBe(mockedPosts.length);
      expect(posts).toEqual(mockedPosts);
      done();
    });

    const request = httpMock.expectOne(req => req.url === service.stackOverflowUrl);
    expect(request.request.method).toBe('JSONP');
    request.flush(data);
    httpMock.verify();

  });

});
