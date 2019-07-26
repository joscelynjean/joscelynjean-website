import { CommunityModule } from './../community/community.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSummaryComponent } from './shared/profile-summary/profile-summary.component';

@NgModule({
  declarations: [ProfileSummaryComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileSummaryComponent
  ]
})
export class ProfileModule { }
