import {Injectable, Inject, EventEmitter } from '@angular/core';
import { TRANSLATIONS2 } from './translations-2'; // import our opaque token

@Injectable()
export class Translate2Service {
	private _currentLang: string;
	private PLACEHOLDER = '%';
	private _defaultLang: string;
  private _fallback: boolean;
	
	public onLangChanged: EventEmitter<string> = new EventEmitter<string>();
	
	public get currentLang() {
    return this._currentLang || this._defaultLang;
  }

  public setDefaultLang(lang: string) {
    this._defaultLang = lang;
  }

  public enableFallback(enable: boolean) {
    this._fallback = enable;
  }

  // inject our translations
	constructor(@Inject(TRANSLATIONS2) private _translations: any) {
	}

	public use(lang: string): void {
		// set current language
		this._currentLang = lang;
		this.onLangChanged.emit(lang);
	}

	private translate(key: string): string {
    let translation = key;
    
    // found in current language
    if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
      return this._translations[this.currentLang][key];
      }
      
    // fallback disabled
    if (!this._fallback) { 
      return translation;
    }
    
    // found in default language
    if (this._translations[this._defaultLang] && this._translations[this._defaultLang][key]) {
      return this._translations[this._defaultLang][key];
    }
    
    // not found
    return translation;
  }
	
  public replace(word: string = '', words: string | string[] = '') {
    let translation: string = word;

    const values: string[] = [].concat(words);
      values.forEach((e, i) => {
        translation = translation.replace(this.PLACEHOLDER.concat(<any>i), e);
      });

    return translation;
  }

	public instant(key: string, words?: string | string[]) {
		// public perform translation
		const translation: string = this.translate(key);

    if (!words) return translation;
    return this.replace(translation, words);
	}
}