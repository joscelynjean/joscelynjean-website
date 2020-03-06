import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: ['./article-display.component.scss']
})
export class ArticleDisplayComponent implements OnInit {

  title = '';
  mainImagePath = '';
  markdownFilePath = '';

  articleId = '';
  loaded = false;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    this.articleId = this.route.snapshot.paramMap.get('articleId');
    this.articleService.getArticles().subscribe(articles => {
      const articleFound = articles.filter(article => article.contentPath === this.articleId).pop();
      this.setupContentToDisplay(articleFound);
      this.loaded = true;
    });
  }

  setupContentToDisplay(article: Article) {
    this.title = article.title;
    this.mainImagePath = `./assets/articles/${article.contentPath}/main.jpg`;
    this.markdownFilePath = `assets/articles/${article.contentPath}/article.md`;
    console.log(this.markdownFilePath);
  }

}
