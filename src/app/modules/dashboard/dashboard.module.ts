import { EmailService } from './../../services/email.service';
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
  exports: [...DashboardComponents],
  providers:[EmailService]
})
export class DashboardModule { }
