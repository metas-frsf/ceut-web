import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesComponent } from './estudiantes.component';
import {MdCardModule, MatCheckboxModule} from '@angular/material';
import {MdGridListModule} from '@angular/material/typings/grid-list';
import {MatTableModule} from '@angular/material/typings/table';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdCardModule,
    MdGridListModule,
    MatTableModule,
    CdkTableModule,
    MatCheckboxModule
  ],
  exports: [EstudiantesComponent],
  declarations: [EstudiantesComponent]
})
export class EstudiantesModule { }
