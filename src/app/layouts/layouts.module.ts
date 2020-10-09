import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyLayoutComponent } from './empty-layout/empty-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



@NgModule({
  declarations: [EmptyLayoutComponent, MainLayoutComponent],
  imports: [
    CommonModule,RouterModule ,BsDropdownModule, 
  ],
  exports: [
    EmptyLayoutComponent, MainLayoutComponent
  ]
})
export class LayoutsModule { }
