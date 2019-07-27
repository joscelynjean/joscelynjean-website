import { ICommunityService } from './../services/community.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StackOverflowPost } from '../models/stack-overflow-post';

export const mockedPosts: StackOverflowPost[] = [{
  title: 'Post 1',
  link: 'https://somewhere.com/posts/1'
},
{
  title: 'Post 2',
  link: 'https://somewhere.com/posts/2'
}];

@Injectable({
  providedIn: 'root'
})
export class CommunityTestingService implements ICommunityService {

  constructor() { }

  public getStackOverflowPosts(): Observable<StackOverflowPost[]> {
    return of(mockedPosts);
  }
}
