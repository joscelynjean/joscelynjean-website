import { GithubProject } from '../models/github-project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IProjectService {
  getGithubProjects(): Observable<GithubProject[]>;
}

/**
 * Service related to projects.
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectService implements IProjectService {

  gitHubUrl = 'https://api.github.com/users/joscelynjean/repos?callback=JSONP_CALLBACK';

  constructor(private http: HttpClient) { }

  /**
   * Get all github projects.
   */
  public getGithubProjects(): Observable<GithubProject[]> {
    return this.http.jsonp<any>(this.gitHubUrl, 'JSONP_CALLBACK').pipe(
      map<any, GithubProject[]>(value => value.data)
    );
  }
}
