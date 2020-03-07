import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDisplayComponent } from './article-display/article-display.component';
import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'articles/:articleId', component: ArticleDisplayComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArticleRoutingModule { }
