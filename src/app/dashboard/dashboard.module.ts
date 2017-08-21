import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
