import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationModule } from './form-validation/form-validation.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormValidationModule,
    BsDatepickerModule.forRoot(),

  ],
  exports: [
    FormValidationModule,
    BsDatepickerModule
  ]
})
export class CoreModule {
}
