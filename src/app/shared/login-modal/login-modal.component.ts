import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { first } from 'rxjs/operators'
import { AuthService } from 'src/app/core/services/auth.service'
import { JWTTokenService } from 'src/app/core/services/jwt-token.service'
import { LocalStorageService } from 'src/app/core/services/local-storage.service'
import { RegisterModalComponent } from '../register-modal/register-modal.component'

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  mode: 'login' | 'forgot' = 'login'
  title: string
  closeBtnName: string
  bsRegisterModalRef: BsModalRef;

  loginForm: FormGroup

  forgotForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
  })
  loading = false
  submitted = false
  returnUrl: string
  error = ''
  success = ''

  constructor(
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    })

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
  }

  get f() { return this.loginForm.controls }


  onSubmit() {
    this.submitted = true

    if (this.loginForm.invalid) {
      return
    }

    const next = (data) => {
      this.loading = false
      this.bsModalRef.hide()
    }

    const error = (error) => {
      this.error = error.error.message
      this.loading = false
    }
    this.loading = true
    this.authService.login(this.f.username.value, this.f.password.value).subscribe(next, error)

  }

  openRegisterModal() {
    this.bsModalRef.hide()
    const initialState = {

      title: 'Đăng ký tài khoản',
      backdrop: true,
      ignoreBackdropClick: true,
    };
    this.bsRegisterModalRef = this.modalService.show(RegisterModalComponent,  Object.assign(initialState, { class: 'modal-xl modal-dialog-centered' }));
    this.bsRegisterModalRef.content.closeBtnName = 'Close';
  }

  openForgotForm(){
    this.mode = 'forgot'
  }

  onSubmitForgot(){
    this.error = null;
    this.success = null
    if (this.forgotForm.invalid) {
      return
    }

    const next = (data) => {
      this.loading = false
      this.mode = 'login'
      this.success = 'Thông tin về mật khẩu đã được gửi về email/số điện thoại của bạn. Vui lòng kiểm tra và đăng nhập với mật khẩu mới.'
    }

    const error = (error) => {
      this.error = error.error.message
      this.loading = false
    }
    this.loading = true
    this.authService.forgot(this.f.username.value).subscribe(next, error)

  }

}
