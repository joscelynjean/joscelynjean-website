import { CommunityTestingService } from './community-testing.service';
import { CommunityService } from './../services/community.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: CommunityService, useClass: CommunityTestingService }
  ]
})
export class CommunityTestingModule { }
