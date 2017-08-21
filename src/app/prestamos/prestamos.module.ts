import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamosComponent } from './prestamos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PrestamosComponent],
  declarations: [PrestamosComponent]
})
export class PrestamosModule { }
