import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DisqusModule } from 'ngx-disqus';
import { MarkdownModule } from 'ngx-markdown';
import { AppMaterialModule } from 'src/app/app-material.module';
import { ArticleDisplayComponent } from './article-display/article-display.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleRoutingModule } from './articles-router.module';

@NgModule({
  declarations: [ArticleListComponent, ArticleDisplayComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    MarkdownModule,
    AppMaterialModule,
    DisqusModule
  ]
})
export class ArticlesModule { }
