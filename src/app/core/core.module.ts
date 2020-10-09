import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationModule } from './form-validation/form-validation.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormValidationModule
  ],
  exports: [
    FormValidationModule
  ]
})
export class CoreModule {
}
