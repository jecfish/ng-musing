import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Article } from './article.interface';

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html'
})
export class PageHomeComponent implements OnInit {

  articles: Article[];

  constructor(private _homeSvc: HomeService) {
  }

  ngOnInit() {
    this._homeSvc.getArticles().subscribe(x => {
      this.articles = x;
    })
  }
}