import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesComponent } from './estudiantes.component';
import {MdCardModule} from '@angular/material';
import {MdGridListModule} from '@angular/material/typings/grid-list';
import {MatTableModule} from '@angular/material/typings/table';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdGridListModule,
    MatTableModule,
    CdkTableModule
  ],
  exports: [EstudiantesComponent],
  declarations: [EstudiantesComponent]
})
export class EstudiantesModule { }
