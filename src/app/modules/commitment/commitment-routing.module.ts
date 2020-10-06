import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommitmentComponent } from './commitment.component';

const routes: Routes = [{ path: '', component: CommitmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommitmentRoutingModule { }
