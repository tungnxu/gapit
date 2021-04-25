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
import { NgSelectModule } from '@ng-select/ng-select';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { PromotionModalComponent } from './promotion-modal/promotion-modal.component';
import { GiftModalComponent } from './gift-modal/gift-modal.component';


@NgModule({
  declarations: [SanitizeHtmlPipe, LoginModalComponent,GiftModalComponent, RegisterModalComponent, CountAnimationDirective, TermModalComponent, SearchResultModalComponent,PromotionModalComponent, SubmitContestModalComponent, TemplateModalComponent],
  imports: [
    LayoutsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    NgSelectModule,
  ],
  exports: [
    LayoutsModule,
    CountAnimationDirective,
    SanitizeHtmlPipe
  ],
  entryComponents: [LoginModalComponent, RegisterModalComponent,GiftModalComponent, TermModalComponent, SearchResultModalComponent,PromotionModalComponent, SubmitContestModalComponent, TemplateModalComponent]
})
export class SharedModule { }
