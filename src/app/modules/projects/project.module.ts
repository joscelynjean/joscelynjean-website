import { AppMaterialModule } from './../../app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectSummaryComponent } from './shared/project-summary/project-summary.component';

@NgModule({
  declarations: [ProjectSummaryComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ProjectSummaryComponent
  ]
})
export class ProjectModule { }
