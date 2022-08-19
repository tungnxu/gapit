import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtContestComponent } from './art-contest.component';
import { ArtMainComponent } from './art-main/art-main.component';

const routes: Routes = [
  {
    path: 'login',
    component: ArtContestComponent,
  },
  {
    path: '',
    loadChildren: () => import('./art-main/art-main.module').then(m => m.ArtMainModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtContestRoutingModule { }
