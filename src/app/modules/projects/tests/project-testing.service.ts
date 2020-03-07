import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GithubProject } from '../models/github-project';
import { IProjectService } from '../services/project.service';

export const mockedProjects: GithubProject[] = [
  {
    name: 'Project 1',
    description: 'This is description of project 1.',
    html_url: 'https://somewhere.com/projects/1'
  },
  {
    name: 'Project 2',
    description: 'This is description of project 2.',
    html_url: 'https://somewhere.com/projects/2'
  },
  {
    name: 'Project 3',
    description: 'This is description of project 3.',
    html_url: 'https://somewhere.com/projects/3'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProjectTestingService implements IProjectService {

  constructor() { }

  public getGithubProjects(): Observable<GithubProject[]> {
    return of(mockedProjects);
  }
}
