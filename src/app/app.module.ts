import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { PresentationComponent } from './presentation/presentation.component';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, '/assets/data', '/translation.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
