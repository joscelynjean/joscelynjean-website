import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../services/project.service';
import { ProjectTestingService } from './project-testing.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ProjectService, useClass: ProjectTestingService }
  ]
})
export class ProjectTestingModule { }
