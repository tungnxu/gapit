import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialViewComponent } from './material.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialViewComponent
  },
  {
    path: ':slug/:categoryId',
    component: MaterialViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
