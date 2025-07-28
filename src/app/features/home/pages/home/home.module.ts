import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [HomeComponent,ButtonComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
