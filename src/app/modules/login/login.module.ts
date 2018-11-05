import { LoginService } from './../../services/login.service';
import { LoginComponents } from './login.inlcude';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [...LoginComponents],
  exports: [...LoginComponents],
  providers: [LoginService]
})
export class LoginModule { }
