import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { LayoutsModule } from '../layouts/layouts.module';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { CountAnimationDirective } from './directives/count-animation.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadControlComponent } from './file-upload-control/file-upload-control.component';
import { TermModalComponent } from './term-modal/term-modal.component';
import { SearchResultModalComponent } from './search-result-modal/search-result-modal.component';
import { SubmitContestModalComponent } from './submit-contest-modal/submit-contest-modal.component';
import { TemplateModalComponent } from './template-modal/template-modal.component';



@NgModule({
  declarations: [LoginModalComponent, RegisterModalComponent, CountAnimationDirective, FileUploadControlComponent, TermModalComponent, SearchResultModalComponent,SubmitContestModalComponent, TemplateModalComponent],
  imports: [
    LayoutsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LayoutsModule,
    CountAnimationDirective,
    FileUploadControlComponent
  ],
  entryComponents: [LoginModalComponent, RegisterModalComponent, TermModalComponent, SearchResultModalComponent,SubmitContestModalComponent,TemplateModalComponent]
})
export class SharedModule { }
