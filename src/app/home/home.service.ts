import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HomeService {

  constructor(private _http: Http) { }

  getArticles() {
    return this._http.get('/assets/articles.json')
      .map(x => x.json());
  }
}