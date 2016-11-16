/*/// <reference path="@types/jquery/index.d.ts" />*/

import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Joscelyn Jean';
  isEnglishLanguage = false;

  constructor(translate: TranslateService) {

        // Cookie handling
        if(!$.cookie('language')) {
          var userLang = navigator.language || navigator.userLanguage;
          $.cookie('language',userLang === 'fr' ? 'fr' : 'en');
        }
        var language : string = $.cookie('language');

        // optional, default is "en"
        translate.setDefaultLang(language);
        // the lang to use, if the lang isn't available, it will use the loader defined to get them
        translate.use(language);
        // if you manually want to get new translations, you can call this:
        // use the loader defined (static by default) to get the translations
        // translate.getTranslation(userLang);
        translate.currentLang = language;
    }

    ngOnInit() {
      this.isEnglishLanguage = (this.getCurrentLanguage() === "en");
    }

    getCurrentLanguage() {
      return $.cookie('language');
    }

    setCurrentLanguage(language: string) {
      $.cookie('language', language);
      location.reload(); // Reload page so we can apply new language
    }
}
