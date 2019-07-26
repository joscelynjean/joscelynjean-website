import { GithubProject } from '../models/github-project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  public getGithubProjects(): Observable<GithubProject[]> {
    const url = 'http://api.github.com/users/joscelynjean/repos?callback=JSONP_CALLBACK';
    return this.http.jsonp<any>(url, 'JSONP_CALLBACK').pipe(
      map<any, GithubProject[]>(value => value.data)
    );
  }
}
