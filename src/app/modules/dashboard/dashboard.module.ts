import { DashboardComponents } from './dashboard.include';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
// import { NgxEditorModule } from 'ngx-editor';



@NgModule({
  imports: [
    CommonModule,
    EditorModule
  ],
  declarations: [...DashboardComponents],
  exports: [...DashboardComponents]
})
export class DashboardModule { }
