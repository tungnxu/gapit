import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from '../core/services/auth.service';
import { LoginModalComponent } from '../shared/login-modal/login-modal.component';
import { RegisterModalComponent } from '../shared/register-modal/register-modal.component';

@Component({
  selector: 'app-art-contest',
  templateUrl: './art-contest.component.html',
  styleUrls: ['./art-contest.component.scss']
})
export class ArtContestComponent implements OnInit {
  bsRegisterModalRef: BsModalRef;
  bsLoginModalRef: BsModalRef;
  constructor(private modalService: BsModalService, private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getNewToken()
    this.authService.currentUser.subscribe((user) => {
      if(user) {
        user.UserType === 'student' ? this.router.navigate(['cuoc-thi-ve/dang-ky']) : (user.UserType === 'facebooker') ? this.router.navigate(['cuoc-thi-ve/binh-chon']) : this.router.navigate(['cuoc-thi-ve/dang-ky-gv'])
      }
    })
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

  openRegisterModal() {
    const initialState = {

      title: 'Đăng ký tài khoản',
      backdrop: true,
      ignoreBackdropClick: true,
    }
    this.bsRegisterModalRef = this.modalService.show(RegisterModalComponent,  Object.assign({initialState}, { class: 'modal-md modal-dialog-centered' }));
    this.bsRegisterModalRef.content.closeBtnName = 'Close';

  }
}
