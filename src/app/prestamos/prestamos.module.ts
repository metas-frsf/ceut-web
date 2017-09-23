import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamosComponent } from './prestamos.component';
import {MdTableModule} from "@angular/material/typings/table";
import {MdGridListModule} from "@angular/material/typings/grid-list";
import {MdCardModule} from "@angular/material/typings/card";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdGridListModule,
    MdTableModule
  ],
  exports: [PrestamosComponent],
  declarations: [PrestamosComponent]
})
export class PrestamosModule { }
