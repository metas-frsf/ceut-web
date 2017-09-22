import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesComponent } from './estudiantes.component';
import {MdCardModule} from "@angular/material";
import {MdTableModule} from "@angular/material/typings/table";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdTableModule
  ],
  exports: [EstudiantesComponent],
  declarations: [EstudiantesComponent]
})
export class EstudiantesModule { }
