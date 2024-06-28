import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'home', loadChildren: () => import('./pages/home/home-page.module').then(m => m.HomeModule) },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
