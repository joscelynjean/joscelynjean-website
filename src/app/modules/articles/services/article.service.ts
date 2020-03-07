import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './../models/article';

export interface IArticleService {
  getArticles(): Observable<Article[]>;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService implements IArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('/assets/articles/articles.json');
  }
}
