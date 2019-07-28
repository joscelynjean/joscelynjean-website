import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterComponent } from './components/twitter/twitter.component';
import { StackoverflowComponent } from './components/stackoverflow/stackoverflow.component';
import { CommunitySummaryComponent } from './shared/community-summary/community-summary.component';
import { AppMaterialModule } from '../../app-material.module';
import { SafeHtmlPipe } from './components/stackoverflow/safe-html.pipe';

@NgModule({
  declarations: [TwitterComponent, StackoverflowComponent, CommunitySummaryComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [CommunitySummaryComponent]
})
export class CommunityModule { }
