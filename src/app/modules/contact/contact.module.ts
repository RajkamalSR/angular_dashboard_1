import { ContactComponents } from './contact.include';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...ContactComponents],
  exports : [...ContactComponents]
})
export class ContactModule { }
