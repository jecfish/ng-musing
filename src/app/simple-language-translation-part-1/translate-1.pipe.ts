// app/translate/translate.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import { Translate1Service } from './translate-1.service'; // our translate service

@Pipe({
    name: 'translate1',
    pure: false // impure pipe, update value when we change language
})

export class Translate1Pipe implements PipeTransform {

	constructor(private _translate: Translate1Service) { }

	transform(value: string, args: any[]): any {
		if (!value) return;
		
		return this._translate.instant(value);
	}
}