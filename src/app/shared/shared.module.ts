import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { LayoutsModule } from '../layouts/layouts.module';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';



@NgModule({
  declarations: [LoginModalComponent, RegisterModalComponent],
  imports: [
    LayoutsModule,
    CommonModule,
  ],
  exports:[
    LayoutsModule
  ],
  entryComponents: [LoginModalComponent,RegisterModalComponent]
})
export class SharedModule { }
