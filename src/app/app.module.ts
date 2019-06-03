import { SummaryModule } from './summary/summary.module';
import { ProjectModule } from './projects/project.module';
import { ProfileModule } from './profile/profile.module';
import { AppMaterialModule } from './app-material.module';
import { AppBootstrapModule } from './app-bootstrap.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AppMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    // Application specific
    ProfileModule,
    ProjectModule,
    SummaryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
