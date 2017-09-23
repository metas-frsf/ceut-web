import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import {MdCardModule} from "@angular/material/typings/card";
import {MdGridListModule} from "@angular/material/typings/grid-list";
import {MdTableModule} from "@angular/material/typings/table";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdGridListModule,
    MdTableModule
  ],
  exports: [UsuariosComponent],
  declarations: [UsuariosComponent]
})
export class UsuariosModule { }
