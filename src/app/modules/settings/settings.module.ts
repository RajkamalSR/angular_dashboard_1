import { SettingsComponents } from './settings.include';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
      CommonModule,
  ],
  declarations: [...SettingsComponents],
  exports: [...SettingsComponents]
})
export class SettingsModule { }
