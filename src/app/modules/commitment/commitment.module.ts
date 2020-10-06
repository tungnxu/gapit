import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitmentRoutingModule } from './commitment-routing.module';
import { CommitmentComponent } from './commitment.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CommitmentComponent],
  imports: [
    CommonModule,
    CommitmentRoutingModule,
    SharedModule
  ]
})
export class CommitmentModule { }
