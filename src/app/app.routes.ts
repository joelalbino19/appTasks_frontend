import { Routes } from '@angular/router';

export const routes: Routes = [
    
    { path: 'login', loadChildren: () => import('./pages/login/login-page.module').then(m => m.LoginModule) },
    { path: 'register', loadChildren: () => import('./pages/register/register-page.module').then(m => m.RegisterModule) },
    { path: 'forgot_password', loadChildren: () => import('./pages/forgot_password/forgotPassword-page.module').then(m => m.forgotPasswordModule) },
    { path: 'home', loadChildren: () => import('./pages/home/home-page.module').then(m => m.HomeModule) },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
