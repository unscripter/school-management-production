import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './app.component.notfound';
import { Website } from './website/website';
// import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: Website },
  { path: 'login', component: Login },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashBoardModule' },
  // { path: 'dashboard', component: Dashboard },
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
