import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from '../parent/parent.component';
import { HomeComponent } from '../home/home.component';
import { Child1Component } from '../child1/child1.component';
import { ParentEditComponent } from './parent-edit/parent-edit.component';

export const parentRoutes: Routes = [

  // {
  //   path: '',
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: 'edit/Parent',
  //       component: ParentEditComponent
  //     },
  //     {
  //       path: 'parent',
  //       component: ParentComponent,
  //       children: [
  //         {
  //           path: 'child_1',
  //           component: Child1Component,
  //           children: [
  //             {
  //               path: 'child_2',
  //               component: Child2Component
  //             }
  //           ]
  //         }
  //       ]

  //     },
  //   ]
  // }

  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'parent',
        component: ParentComponent,
      },
      {
        path: 'edit/Parent',
        component: ParentEditComponent,
        children: [
          {
            path: 'child_1',
            component: Child1Component,
          }
        ]
      },
    ]
  }
];
export const parentRouting: ModuleWithProviders = RouterModule.forChild(parentRoutes);