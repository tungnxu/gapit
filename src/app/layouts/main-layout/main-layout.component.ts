import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginModalComponent } from 'src/app/shared/login-modal/login-modal.component';
import { RegisterModalComponent } from 'src/app/shared/register-modal/register-modal.component';
import { SearchResultModalComponent } from 'src/app/shared/search-result-modal/search-result-modal.component';
import { SubmitContestModalComponent } from 'src/app/shared/submit-contest-modal/submit-contest-modal.component';
import { TemplateModalComponent } from 'src/app/shared/template-modal/template-modal.component';
import { TermModalComponent } from 'src/app/shared/term-modal/term-modal.component';

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

      title: 'Đăng ký tài khoản',
      backdrop: true,
      ignoreBackdropClick: true,
    };
    this.bsRegisterModalRef = this.modalService.show(RegisterModalComponent,  Object.assign({initialState}, { class: 'modal-xl modal-dialog-centered' }));
    this.bsRegisterModalRef.content.closeBtnName = 'Close';
  }

  openLoginModal() {
    const initialState = {

      backdrop: true,
      ignoreBackdropClick: true,
      title: 'Đăng nhập tài khoản',
    };
    this.bsLoginModalRef = this.modalService.show(LoginModalComponent, Object.assign({initialState}, { class: 'modal-xl modal-dialog-centered' }));
    this.bsLoginModalRef.content.closeBtnName = 'Close';
  }

  openTermModal() {
    const initialState = {

      backdrop: true,
      ignoreBackdropClick: true,
    };
    this.bsLoginModalRef = this.modalService.show(TermModalComponent, Object.assign({initialState}, { class: 'modal-md modal-dialog-centered' }));
    this.bsLoginModalRef.content.closeBtnName = 'Close';
  }

  openSearchResultModal() {
    const initialState = {

      backdrop: true,
      ignoreBackdropClick: true,
    };
    this.bsLoginModalRef = this.modalService.show(SearchResultModalComponent, Object.assign({initialState}, { class: 'modal-md modal-dialog-centered' }));
    this.bsLoginModalRef.content.closeBtnName = 'Close';
  }

  openSubmitContestModal(){
    const initialState = {

      backdrop: true,
      ignoreBackdropClick: true,
    };
    this.bsLoginModalRef = this.modalService.show(SubmitContestModalComponent, Object.assign({initialState}, { class: 'modal-md modal-dialog-centered' }));
    this.bsLoginModalRef.content.closeBtnName = 'Close';
  }

  openTemplateModal(){
    const initialState = {

      backdrop: true,
      ignoreBackdropClick: true,
    };
    this.bsLoginModalRef = this.modalService.show(TemplateModalComponent, Object.assign({initialState}, { class: 'modal-xl modal-dialog-centered' }));
    this.bsLoginModalRef.content.closeBtnName = 'Close';
  }

}
