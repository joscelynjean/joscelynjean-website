import { GithubProject } from '../models/github-project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IProjectService {
  getGithubProjects(): Observable<GithubProject[]>;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService implements IProjectService {

  gitHubUrl = 'http://api.github.com/users/joscelynjean/repos?callback=JSONP_CALLBACK';

  constructor(private http: HttpClient) { }

  public getGithubProjects(): Observable<GithubProject[]> {
    return this.http.jsonp<any>(this.gitHubUrl, 'JSONP_CALLBACK').pipe(
      map<any, GithubProject[]>(value => value.data)
    );
  }
}
