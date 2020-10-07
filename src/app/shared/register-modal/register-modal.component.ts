import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { first } from 'rxjs/operators'
import { AccountApi } from 'src/app/api/account.api'
import { AuthService } from 'src/app/core/services/auth.service'
import { LoginModalComponent } from '../login-modal/login-modal.component'

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {

  title: string
  closeBtnName: string
  bsLoginModalRef: BsModalRef

  registerForm: FormGroup
  loading = false
  returnUrl: string
  error = ''

  constructor(
    public bsModalRef1: BsModalRef,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountApi: AccountApi,
    private authService: AuthService) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      isCheckTerm: [false]
    })
  }

  get f() { return this.registerForm.controls }


  onSubmit() {

    if (this.registerForm.invalid) {
      return
    }

    if(!this.f.isCheckTerm.value){
      this.error = 'Bạn chưa đồng ý với điều khoản'
      return
    }
    this.loading = true

    const command = {
      username: this.f.username.value,
      password: this.f.password.value
    }

    const next = (data) => {
      this.authService.login(this.f.username.value, this.f.password.value).subscribe(()=>{
        this.loading = false
        this.bsModalRef1.hide()
      })
    }

    const error = (error) => {
      this.error = error.error['signUp.UserName'][0]
      this.loading = false
    }

    this.accountApi.registerAccount(command).pipe(first()).subscribe(next, error)

  }
 

  openLoginModal() {
    this.bsModalRef1.hide()
    const initialState = {

      backdrop: true,
      ignoreBackdropClick: true,
      title: 'Đăng nhập tài khoản',
    }
    this.bsLoginModalRef = this.modalService.show(LoginModalComponent, Object.assign({initialState}, { class: 'modal-md  modal-dialog-centered' }))
    this.bsLoginModalRef.content.closeBtnName = 'Close'
  }

}
