import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericCardComponent } from './components/generic-card/generic-card.component';

@NgModule({
  declarations: [GenericCardComponent],
  exports: [GenericCardComponent],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
