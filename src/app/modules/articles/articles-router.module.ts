import { ArticleDisplayComponent } from './article-display/article-display.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'articles/:id', component: ArticleDisplayComponent }
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
