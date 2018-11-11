


import { AppRoutingModule } from './app.routing';
import { SettingsModule } from './modules/settings/settings.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ContactModule } from './modules/contact/contact.module';
import { LoginModule } from './modules/login/login.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



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
    LoginModule,
    SettingsModule,
    DashboardModule,
    ContactModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
