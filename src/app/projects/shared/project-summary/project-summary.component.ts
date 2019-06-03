import { ProjectService } from './../project.service';
import { GithubProject } from './../github-project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent implements OnInit {

  githubProjects: GithubProject[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getGithubProjects().subscribe(projects => {
      this.githubProjects = projects;
    });
  }

}
