import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationModule } from './form-validation/form-validation.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FileUploadControlComponent } from '../shared/file-upload-control/file-upload-control.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';



@NgModule({
  declarations: [FileUploadControlComponent],
  imports: [
    CommonModule,
    FormValidationModule,
    BsDatepickerModule.forRoot(),


  ],
  exports: [
    FileUploadControlComponent,
    FormValidationModule,
    BsDatepickerModule,
  ]
})
export class CoreModule {
}
