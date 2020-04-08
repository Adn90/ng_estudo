import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';



@NgModule({
  declarations: [StarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent
  ]
})
export class StarModule { }
