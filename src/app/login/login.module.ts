import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent]
})
export class LoginModule { }
