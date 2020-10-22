import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { PaintingViewComponent } from './painting-view.component';
import { PaintingRoutingModule } from './painting-routing.module';
import { PaintingDetailComponent } from './painting-detail/painting-detail.component';


@NgModule({
  declarations: [PaintingViewComponent, PaintingDetailComponent],
  imports: [
    CommonModule,
    PaintingRoutingModule,
    SharedModule
  ]
})
export class PaintingModule { }
