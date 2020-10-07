import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { first } from 'rxjs/operators'
import { AccountApi } from 'src/app/api/account.api'
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
    private accountApi: AccountApi) {}

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
    console.log(this.registerForm.value)
    this.loading = true

    const command = {
      username: this.f.username.value,
      password: this.f.password.value
    }

    const next = (data) => {
      this.loading = false
      this.openLoginModal()
    }

    const error = (error) => {
      this.error = error
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
    this.bsLoginModalRef = this.modalService.show(LoginModalComponent, Object.assign({initialState}, { class: 'modal-xl modal-dialog-centered' }))
    this.bsLoginModalRef.content.closeBtnName = 'Close'
  }

}
