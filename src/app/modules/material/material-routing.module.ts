import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialCategoryResolveService } from 'src/app/shared/services/material-category-resolve.service';
import { MaterialResolveService } from 'src/app/shared/services/material-resolve.service';
import { MaterialDetailComponent } from './material-detail/material-detail.component';

import { MaterialViewComponent } from './material.component';

const routes: Routes = [
  {
    path: '',
    resolve: {
      cat: MaterialCategoryResolveService
    },
    component: MaterialViewComponent
  },
  {
    path: ':slug/:categoryId',
    resolve: {
      cat: MaterialCategoryResolveService
    },
    component: MaterialViewComponent
  },
  {
    path: 'detail/:slug/:type/:materialId',
    resolve: {
      material: MaterialResolveService,
    },
    component: MaterialDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
