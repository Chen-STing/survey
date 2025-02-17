import { Routes } from '@angular/router';
import { LoginComponent } from './login-register/login.component';
import { TopbarComponent } from './topbar-Home/topbar.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: TopbarComponent}
];
