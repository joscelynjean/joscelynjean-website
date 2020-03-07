import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './modules/summary/shared/summary/summary.component';

const routes: Routes = [
  // { path: '', redirectTo: '/summary', pathMatch: 'full' },
  { path: '', component: SummaryComponent }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  // Scroll to element when using bookmarks
  anchorScrolling: 'enabled',
  // Allow anchor to work when clicking the same link more than one time in a row
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
