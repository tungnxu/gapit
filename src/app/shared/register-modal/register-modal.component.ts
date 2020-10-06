import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {

  title: string;
  closeBtnName: string;
  list: any[] = [];
  bsLoginModalRef: BsModalRef;

  constructor(public bsModalRef1: BsModalRef,private modalService: BsModalService) {}

  ngOnInit() {
  }

  openLoginModal() {
    this.bsModalRef1.hide()
    const initialState = {

      backdrop: true,
      ignoreBackdropClick: true,
      title: 'Đăng nhập tài khoản',
    };
    this.bsLoginModalRef = this.modalService.show(LoginModalComponent, Object.assign({initialState}, { class: 'modal-xl modal-dialog-centered' }));
    this.bsLoginModalRef.content.closeBtnName = 'Close';
  }

}
