import { ArticleDisplayComponent } from './article-display/article-display.component';
import { ArticleRoutingModule } from './articles-router.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ArticleListComponent, ArticleDisplayComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticlesModule { }
