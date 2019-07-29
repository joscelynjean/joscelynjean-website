import { AppMaterialModule } from 'src/app/app-material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
