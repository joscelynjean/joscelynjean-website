import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './../../app-material.module';
import { ProjectSummaryComponent } from './shared/components/project-summary/project-summary.component';

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
