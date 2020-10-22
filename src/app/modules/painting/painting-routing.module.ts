import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from 'src/app/layouts/main-layout/main-layout.component';
import { PaintingCategoryResolveService } from 'src/app/shared/services/painting-category-resolve.service';
import { PaintingDetailComponent } from './painting-detail/painting-detail.component';
import { PaintingViewComponent } from './painting-view.component';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        resolve: {
          cat: PaintingCategoryResolveService
        },
        component: PaintingViewComponent
      },
    ]
  },
  {
    path:':slug/:paintingId',
    component: PaintingDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaintingRoutingModule { }
