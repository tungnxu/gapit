import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialViewComponent } from './material.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { MaterialDetailComponent } from './material-detail/material-detail.component';
import { MaterialStandardComponent } from './material-detail/material-type/material-standard/material-standard.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MaterialVideoComponent } from './material-detail/material-type/material-video/material-video.component';
import { MaterialMusicComponent } from './material-detail/material-type/material-music/material-music.component';
import { PlyrModule } from 'ngx-plyr';
import { MaterialGameComponent } from './material-detail/material-type/material-game/material-game.component';


@NgModule({
  declarations: [MaterialViewComponent, MaterialDetailComponent, MaterialStandardComponent, MaterialVideoComponent, MaterialMusicComponent, MaterialGameComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    SharedModule,
    AccordionModule,
    SlickCarouselModule,
    PlyrModule
  ]
})
export class MaterialModule { }
