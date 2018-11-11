import { DashboardComponents } from './dashboard.include';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...DashboardComponents],
  exports: [...DashboardComponents]
})
export class DashboardModule { }
