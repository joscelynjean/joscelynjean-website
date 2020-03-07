import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../../app-material.module';
import { SafeHtmlPipe } from './components/stackoverflow/safe-html.pipe';
import { StackoverflowComponent } from './components/stackoverflow/stackoverflow.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { CommunitySummaryComponent } from './shared/community-summary/community-summary.component';

@NgModule({
  declarations: [TwitterComponent, StackoverflowComponent, CommunitySummaryComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [CommunitySummaryComponent]
})
export class CommunityModule { }
