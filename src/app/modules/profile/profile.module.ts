import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommunityModule } from './../community/community.module';
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
