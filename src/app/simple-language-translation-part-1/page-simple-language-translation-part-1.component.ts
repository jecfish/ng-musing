import { Component } from '@angular/core';
import { Translate1Service } from './translate-1.service';

@Component({
  selector: 'page-simple-language-translation-part-1',
  templateUrl: './page-simple-language-translation-part-1.component.html'
})
export class PageSimpleLanguageTranslationPart1Component {
  translatedText: string;
  supportedLangs: any[];

  constructor(private _translate: Translate1Service) { }

  ngOnInit() {
    // standing data
    this.supportedLangs = [
      { display: 'English', value: 'en' },
      { display: 'Español', value: 'es' },
      { display: '华语', value: 'zh' },
    ];

    this.selectLang('es');

  }

  isCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    // set default;
    this._translate.use(lang);
    this.refreshText();
  }

  refreshText() {
    this.translatedText = this._translate.instant('hello world');
  }
}