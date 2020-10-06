import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginModalComponent } from 'src/app/shared/login-modal/login-modal.component';
import { RegisterModalComponent } from 'src/app/shared/register-modal/register-modal.component';

@Component({
  selector: 'tnx-main-layout',
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent implements OnInit {
  bsRegisterModalRef: BsModalRef;
  bsLoginModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  openRegisterModal() {
    const initialState = {
      list: [
        'Open a modal with component',
      ],
      title: 'Đăng ký tài khoản',
      backdrop: true,
      ignoreBackdropClick: true
    };
    this.bsRegisterModalRef = this.modalService.show(RegisterModalComponent,  initialState);
    this.bsRegisterModalRef.content.closeBtnName = 'Close';
  }

  openLoginModal() {
    const initialState = {
      list: [
        'Open a modal with component',
      ],
      title: 'Đăng nhập tài khoản'
    };
    this.bsLoginModalRef = this.modalService.show(LoginModalComponent, {initialState});
    this.bsLoginModalRef.content.closeBtnName = 'Close';
  }

}
