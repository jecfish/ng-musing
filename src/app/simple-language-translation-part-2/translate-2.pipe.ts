// app/translate/translate.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import { Translate2Service } from './translate-2.service'; // our translate service

@Pipe({
    name: 'translate2',
    pure: false // impure pipe, update value when we change language
})

export class Translate2Pipe implements PipeTransform {

	constructor(private _translate: Translate2Service) { }

	transform(value: string, args: string | string[]): any {
		if (!value) return;
		
		return this._translate.instant(value, args);
	}
}