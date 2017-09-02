import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MdGridListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdGridListModule,
  ],
  exports: [DashboardComponent],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
