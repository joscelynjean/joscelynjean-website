import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterComponent } from './twitter/twitter.component';
import { StackoverflowComponent } from './stackoverflow/stackoverflow.component';
import { CommunitySummaryComponent } from './shared/community-summary/community-summary.component';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [TwitterComponent, StackoverflowComponent, CommunitySummaryComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [CommunitySummaryComponent]
})
export class CommunityModule { }
