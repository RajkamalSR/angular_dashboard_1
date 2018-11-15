

import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { SettingsComponent } from './modules/settings/settings.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ContactComponent } from './modules/contact/contact.component';
import { LoginComponent } from './modules/login/login.component';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent}, 
    { path: 'dashboard', component: DashboardComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'contact', component: ContactComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }