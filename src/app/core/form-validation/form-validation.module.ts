import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HasErrorDirective } from './has-error.directive'
import { HasErrorControlDirective } from './has-error-control.directive'
import { BackendErrorDirective } from './backend-error.directive'
import { ShowErrorDirective } from './show-error.directive'
import { ErrorMessageComponent } from './error-message/error-message.component'
import { ErrorDirective } from './error.directive'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HasErrorDirective,
    HasErrorControlDirective,
    BackendErrorDirective,
    ShowErrorDirective,
    ErrorMessageComponent,
    ErrorDirective
  ],
  exports: [
    HasErrorDirective,
    HasErrorControlDirective,
    BackendErrorDirective,
    ShowErrorDirective,
    ErrorMessageComponent,
    ErrorDirective,
    ReactiveFormsModule,
  ]
})
export class FormValidationModule { }
