import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaintingCategoryResolveService } from 'src/app/shared/services/painting-category-resolve.service';
import { PaintingViewComponent } from './painting-view.component';


const routes: Routes = [
  { 
    path: '', 
    resolve: {
      cat: PaintingCategoryResolveService
    },
  component: PaintingViewComponent
 },
  // { path: 'p/:slug/:id', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaintingRoutingModule { }
