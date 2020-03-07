import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from '../components/stackoverflow/safe-html.pipe';
import { CommunityService } from './../services/community.service';
import { CommunityTestingService } from './community-testing.service';

@NgModule({
  declarations: [SafeHtmlPipe],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: CommunityService, useClass: CommunityTestingService }
  ],
  exports: [SafeHtmlPipe]
})
export class CommunityTestingModule { }
