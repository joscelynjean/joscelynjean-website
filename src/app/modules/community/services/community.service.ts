import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StackOverflowPost } from '../models/stack-overflow-post';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(private http: HttpClient) { }

  public getStackOverflowPosts(): Observable<StackOverflowPost[]> {
    // tslint:disable-next-line:max-line-length
    const url = 'https://api.stackexchange.com/2.2/users/11798825/posts?order=desc&sort=activity&site=stackoverflow&filter=!9Z(-wsMqT&callback=JSONP_CALLBACK';
    return this.http.jsonp<any>(url, 'JSONP_CALLBACK').pipe(
      map<any, StackOverflowPost[]>(value => value.items)
    );
  }
}