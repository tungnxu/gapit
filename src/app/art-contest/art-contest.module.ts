import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtContestRoutingModule } from './art-contest-routing.module';
import { ArtContestComponent } from './art-contest.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ArtContestComponent],
  imports: [
    CommonModule,
    ArtContestRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class ArtContestModule { }
