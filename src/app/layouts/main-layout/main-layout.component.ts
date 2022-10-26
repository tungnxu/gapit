import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/core/services/auth.service';
import { ChangePassModalComponent } from 'src/app/shared/change-pass-modal/change-pass-modal.component';
import { LoginModalComponent } from 'src/app/shared/login-modal/login-modal.component';
import { NotiModalComponent } from 'src/app/shared/noti-modal/noti-modal.component';
import { PromotionModalComponent } from 'src/app/shared/promotion-modal/promotion-modal.component';
import { RegisterModalComponent } from 'src/app/shared/register-modal/register-modal.component';
import { SearchResultModalComponent } from 'src/app/shared/search-result-modal/search-result-modal.component';
import { SubmitContestModalComponent } from 'src/app/shared/submit-contest-modal/submit-contest-modal.component';
import { SubmitImageModalComponent } from 'src/app/shared/submit-image-modal/submit-image-modal.component';
import { TemplateModalComponent } from 'src/app/shared/template-modal/template-modal.component';
import { TermModalComponent } from 'src/app/shared/term-modal/term-modal.component';
import { User } from 'src/app/types/models';

@Component({
  selector: 'tnx-main-layout',
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent implements OnInit {
  bsRegisterModalRef: BsModalRef;
  bsLoginModalRef: BsModalRef;

  bsTermModalRef: BsModalRef;
  bsSearchModalRef: BsModalRef;

  bsSubmitContestModalRef: BsModalRef;
  bsTemplateModalRef: BsModalRef;

  bsSubmitImageModalRef: BsModalRef

  promotionModalRef:  BsModalRef;

  currentUser: User
  constructor(private modalService: BsModalService, private authService: AuthService, private _http: HttpClient , private  router: Router) {}

  ngOnInit(): void {
    this.authService.getNewToken()
    this.authService.currentUser.subscribe(userData => {
      if(!userData && !window.location.pathname.includes('voting')){
        // this.openPromotionModal()
        // this.openTickerModal()
      }
      this.currentUser = userData
    })
  }

  get codeExam(){
    return this.currentUser?.student?.exams?.find(x => x.status)?.id
  }


  goToArt(){
    this.router.navigate(['cuoc-thi-ve'])
  }

  logout(){
    this.authService.logout()
  }

  openRegisterModal() {
    const initialState = {

      title: 'Đăng ký tài khoản',
      backdrop: true,
      ignoreBackdropClick: true,
    }
    this.bsRegisterModalRef = this.modalService.show(RegisterModalComponent,  Object.assign({initialState}, { class: 'modal-md modal-dialog-centered' }));
    this.bsRegisterModalRef.content.closeBtnName = 'Close';

  }

  openNotiModal(){
    const initialState = {
      animated: true,
      backdrop: true,
      ignoreBackdropClick: false,
    };
    this.modalService.show(NotiModalComponent,  {initialState, class: 'modal-md modal-dialog-centered modal-gift' , animated: true});


  }

  openLoginModal() {
    const initialState = {

      backdrop: true,
      ignoreBackdropClick: true,
      title: 'Đăng nhập tài khoản',
    };
    this.bsLoginModalRef = this.modalService.show(LoginModalComponent, Object.assign({initialState}, { class: 'modal-md modal-dialog-centered' }));
    this.bsLoginModalRef.content.closeBtnName = 'Close';
  }

  // Modal doi mat khau chua tich hop
  openChangepassModal() {
    const initialState = {

      backdrop: true,
      ignoreBackdropClick: true,
      title: 'Đổi mật khẩu',
    };
    this.bsLoginModalRef = this.modalService.show(ChangePassModalComponent, Object.assign({initialState}, { class: 'modal-md modal-dialog-centered' }));
    this.bsLoginModalRef.content.closeBtnName = 'Close';
  }

  openTermModal() {
    const initialState = {

      backdrop: true,
      ignoreBackdropClick: true,
    };
    this.bsTermModalRef = this.modalService.show(TermModalComponent, Object.assign({initialState}, { class: 'modal-lg modal-dialog-centered' }));
    this.bsTermModalRef.content.closeBtnName = 'Close';
  }

  openSearchResultModal() {
    const initialState = {

      backdrop: true,
      ignoreBackdropClick: true,
    };
    this.bsSearchModalRef = this.modalService.show(SearchResultModalComponent, Object.assign({initialState}, { class: 'modal-md modal-dialog-centered' }));
    this.bsSearchModalRef.content.closeBtnName = 'Close';
  }

  openSubmitContestModal(){
    // const initialState = {

    //   backdrop: true,
    //   ignoreBackdropClick: true,
    // };
    // this.bsSubmitContestModalRef = this.modalService.show(SubmitContestModalComponent, Object.assign(initialState, { class: 'modal-md modal-dialog-centered' }));
    // this.bsSubmitContestModalRef.content.closeBtnName = 'Close';

    this.openNotiModal()
  }

  openTemplateModal(){
    // const initialState = {

    //   backdrop: true,
    //   ignoreBackdropClick: true,
    // };
    // this.bsTemplateModalRef = this.modalService.show(TemplateModalComponent, Object.assign(initialState, { class: 'modal-xl modal-dialog-centered' }));
    // this.bsTemplateModalRef.content.closeBtnName = 'Close';

    this.openNotiModal()

  }

  openPromotionModal() {
    const initialState = {
      animated: true,
      backdrop: true,
      ignoreBackdropClick: false,
    };
    this.promotionModalRef = this.modalService.show(PromotionModalComponent, Object.assign(initialState, { class: 'modal-md modal-pro-800 modal-dialog-centered' }));
  }

  openTickerModal() {
    const initialState = {

      backdrop: true,
      ignoreBackdropClick: true,
    };
    this.bsSubmitImageModalRef = this.modalService.show(SubmitImageModalComponent, Object.assign({ initialState }, { class: 'modal-lg modal-dialog-centered' }));
    this.bsSubmitImageModalRef.content.closeBtnName = 'Close';
  }
}
