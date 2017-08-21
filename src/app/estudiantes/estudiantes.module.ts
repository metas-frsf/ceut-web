import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesComponent } from './estudiantes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EstudiantesComponent],
  declarations: [EstudiantesComponent]
})
export class EstudiantesModule { }
