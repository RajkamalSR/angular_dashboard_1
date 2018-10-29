import { LoginServiceService } from './login-service.service';

import { AppRoutingModule } from './app.routing';
import { SettingsModule } from './modules/settings/settings.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ContactModule } from './modules/contact/contact.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ToggleDirective } from './directives/toggle.directive';
import { ToggleComponent } from './components/toggle/toggle.component';









@NgModule({
  declarations: [
    AppComponent,
    ToggleDirective,
    ToggleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SettingsModule,
    DashboardModule,
    ContactModule,
    AppRoutingModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
