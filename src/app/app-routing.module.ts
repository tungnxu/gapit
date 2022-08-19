import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SubmitImageModalComponent } from './shared/submit-image-modal/submit-image-modal.component';
import { TrungThuComponent } from './trung-thu/trung-thu.component';

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
        path: 'voting',
        loadChildren: () => import('./modules/voting/voting.module').then(m => m.VotingModule)
      },


    ]
  },
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      {
        path: 'trung-thu',
        component: TrungThuComponent
      },
      {
        path: 'survey',
        loadChildren: () => import('./survey/survey.module').then(m => m.SurveyModule)
      },
      {
        path: 'cuoc-thi-ve',
        loadChildren: () => import('./art-contest/art-contest.module').then(m => m.ArtContestModule)
      },

    ]

  },
  {
    path: 'gallery',
    loadChildren: () => import('./modules/painting/painting.module').then(m => m.PaintingModule)
  },
  { path: 'upload-image', loadChildren: () => import('./page/page.module').then(m => m.PageModule) },

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
