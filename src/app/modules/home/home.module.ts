import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LandingSlideComponent } from './landing-slide/landing-slide.component';
import { ResourceWhoSectionComponent } from './resource-who-section/resource-who-section.component';
import { ResourceAgeSectionComponent } from './resource-age-section/resource-age-section.component';
import { ResourceActivitySectionComponent } from './resource-activity-section/resource-activity-section.component';
import { ResourceProgramSectionComponent } from './resource-program-section/resource-program-section.component';


@NgModule({
  declarations: [HomeComponent, LandingSlideComponent, ResourceWhoSectionComponent, ResourceAgeSectionComponent, ResourceActivitySectionComponent, ResourceProgramSectionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SlickCarouselModule
  ]
})
export class HomeModule { }
