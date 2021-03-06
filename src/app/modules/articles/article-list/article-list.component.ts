import { ArticleService } from './../services/article.service';
import { Article } from './../models/article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articleListLoaded = false;
  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles;
      this.articleListLoaded = true;
    });
  }

}
