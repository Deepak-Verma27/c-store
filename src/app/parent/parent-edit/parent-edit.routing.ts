import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentEditComponent } from './parent-edit.component';
import { Child1Component } from '../../child1/child1.component';

export const child1Routes: Routes = [
  {
    path: 'edit/Parent',
    component: ParentEditComponent,
    children: [
      {
        path: 'child_1',
        component: Child1Component,
      },

    ]
  }
];
export const parentEditRouting: ModuleWithProviders = RouterModule.forChild(child1Routes);