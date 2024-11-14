import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './post/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'posts', loadChildren: () => import('./post/post-routes/post-routes')
  }
];


