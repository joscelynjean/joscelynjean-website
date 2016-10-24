import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '../project.service';
import { Http, Response, Jsonp, JsonpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers : [
    ProjectService
  ]
})
export class ProjectComponent implements OnInit {

  projects: Promise<Project[]>;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projects = this.projectService.getProjects();
  }

}
