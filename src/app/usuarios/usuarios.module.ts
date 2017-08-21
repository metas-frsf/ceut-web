import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [UsuariosComponent],
  declarations: [UsuariosComponent]
})
export class UsuariosModule { }
