import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ArtMainRoutingModule } from './art-main-routing.module';
import { ArtMainComponent } from './art-main.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { XemKetQuaComponent } from './xem-ket-qua/xem-ket-qua.component';
import { TheLeComponent } from './the-le/the-le.component';
import { ThuVienComponent } from './thu-vien/thu-vien.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CoreModule } from 'src/app/core/core.module';
import { FormValidationModule } from 'src/app/core/form-validation/form-validation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ContestFormComponent } from './components/contest-form/contest-form.component';
import { SuccessSubmitComponent } from './components/success-submit/success-submit.component';
import { EditContestFormComponent } from './components/edit-contest-form/edit-contest-form.component';


@NgModule({
  declarations: [ArtMainComponent, DangKyComponent, XemKetQuaComponent, TheLeComponent, ThuVienComponent, RegisterFormComponent, ContestFormComponent, SuccessSubmitComponent, EditContestFormComponent],
  imports: [
    CommonModule,
    ArtMainRoutingModule,
    SharedModule,
    NgSelectModule,
    ReactiveFormsModule ,
    FormsModule,
    // FormValidationModule,
    // BsDatepickerModule.forRoot(),
    CoreModule
  ],
  providers: [DatePipe]

})
export class ArtMainModule { }
