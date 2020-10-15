import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialViewComponent } from './material.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { MaterialDetailComponent } from './material-detail/material-detail.component';
import { MaterialStandardComponent } from './material-detail/material-type/material-standard/material-standard.component';


@NgModule({
  declarations: [MaterialViewComponent, MaterialDetailComponent, MaterialStandardComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    SharedModule,
    AccordionModule
  ]
})
export class MaterialModule { }
