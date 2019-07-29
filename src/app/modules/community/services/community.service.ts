import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StackOverflowPost } from '../models/stack-overflow-post';

export interface ICommunityService {
  getStackOverflowPosts(): Observable<StackOverflowPost[]>;
}

/**
 * Community service used to retrieve information from website such
 * as stackoverflow.
 */
@Injectable({
  providedIn: 'root'
})
export class CommunityService implements ICommunityService {

  // The url to get the posts
  // tslint:disable-next-line:max-line-length
  stackOverflowUrl = 'https://api.stackexchange.com/2.2/users/11798825/posts?order=desc&sort=activity&site=stackoverflow&filter=!9Z(-wsMqT&callback=JSONP_CALLBACK';

  constructor(private http: HttpClient) { }

  /**
   * Get my latest posts on stack overflow, using JSONP.
   */
  public getStackOverflowPosts(): Observable<StackOverflowPost[]> {
    return this.http.jsonp<any>(this.stackOverflowUrl, 'JSONP_CALLBACK').pipe(
      map<any, StackOverflowPost[]>(value => value.items)
    );
  }
}
