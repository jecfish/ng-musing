// app/translate/translation.ts

import { OpaqueToken } from '@angular/core';

// import translations
import {
  LANG_EN_NAME, LANG_EN_TRANS,
  LANG_ES_NAME, LANG_ES_TRANS,
  LANG_ZH_NAME, LANG_ZH_TRANS,
} from '../lang';

// translation token
export const TRANSLATIONS1 = new OpaqueToken('translations1');

// all traslations
const dictionary = {
  [LANG_EN_NAME]: LANG_EN_TRANS,
  [LANG_ES_NAME]: LANG_ES_TRANS,
  [LANG_ZH_NAME]: LANG_ZH_TRANS,
};

// providers
export const TRANSLATION1_PROVIDERS = [
  { provide: TRANSLATIONS1, useValue: dictionary },
];