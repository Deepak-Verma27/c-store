import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from '../parent/parent.component';
import { Child1Component } from '../child1/child1.component';

export const child1Routes: Routes = [

];
export const child1Routing: ModuleWithProviders = RouterModule.forChild(child1Routes);