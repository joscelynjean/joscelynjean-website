import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppBootstrapModule } from './app-bootstrap.module';
import { AppMaterialModule } from './app-material.module';
import { CoreModule } from './core/core.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ProjectModule } from './modules/projects/project.module';
import { SummaryModule } from './modules/summary/summary.module';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisqusModule } from 'ngx-disqus';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesModule } from './modules/articles/articles.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AppMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MarkdownModule.forRoot(),
    DisqusModule.forRoot('joscelyn-jean'),
    // Application specific
    CoreModule,
    ProfileModule,
    ProjectModule,
    SummaryModule,
    ArticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
