import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard } from './dashboard';

const routes: Routes = [
 { path: '', component: Dashboard },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
