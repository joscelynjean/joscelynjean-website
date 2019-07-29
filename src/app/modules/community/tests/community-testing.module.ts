import { CommunityTestingService } from './community-testing.service';
import { CommunityService } from './../services/community.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../components/stackoverflow/safe-html.pipe';

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
