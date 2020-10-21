import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'home'
      // },
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'article',
        loadChildren: () => import('./modules/article/article.module').then(m => m.ArticleModule)
      },
      {
        path: 'commitment',
        loadChildren: () => import('./modules/commitment/commitment.module').then(m => m.CommitmentModule)
      },
      {
        path: 'material',
        loadChildren: () => import('./modules/material/material.module').then(m => m.MaterialModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('./modules/painting/painting.module').then(m => m.PaintingModule)
      },

    ]
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
