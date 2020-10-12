import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialViewComponent } from './material.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MaterialViewComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    SharedModule
  ]
})
export class MaterialModule { }
