import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/summary', pathMatch: 'full' },
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
