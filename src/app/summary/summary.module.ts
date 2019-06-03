import { AppMaterialModule } from './../app-material.module';
import { ProfileModule } from './../profile/profile.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './shared/summary/summary.component';
import { SummaryRoutingModule } from './summary-router.module';
import { ProjectModule } from '../projects/project.module';

@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    SummaryRoutingModule,
    ProfileModule,
    ProjectModule
  ]
})
export class SummaryModule { }
