import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotingRoutingModule } from './voting-routing.module';
import { VotingComponent } from './voting.component';
import { VotingTopComponent } from './voting-top/voting-top.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from 'src/app/shared/shared.module';
import { VotingListComponent } from './voting-list/voting-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [VotingComponent, VotingTopComponent, VotingListComponent],
  imports: [
    CommonModule,
    VotingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SlickCarouselModule
  ]
})
export class VotingModule { }
