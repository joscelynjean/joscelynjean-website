import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectModule } from '../projects/project.module';
import { AppMaterialModule } from './../../app-material.module';
import { CommunityModule } from './../community/community.module';
import { ProfileModule } from './../profile/profile.module';
import { SummaryComponent } from './shared/summary/summary.component';
import { SummaryRoutingModule } from './summary-router.module';

@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    SummaryRoutingModule,
    ProfileModule,
    CommunityModule,
    ProjectModule
  ]
})
export class SummaryModule { }
