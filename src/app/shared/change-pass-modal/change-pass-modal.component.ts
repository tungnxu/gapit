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
  selector: 'app-change-pass-modal',
  templateUrl: './change-pass-modal.component.html',
  styleUrls: ['./change-pass-modal.component.scss']
})
export class ChangePassModalComponent implements OnInit {
  title: string
  closeBtnName: string

  form: FormGroup
  loading = false
  submitted = false
  error = ''
  success = ''

  constructor(
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      oldPassword:  ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      newPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword:  ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    })
  }

  get f() { return this.form.controls }


  onSubmit() {
    this.submitted = true
    this.success = null
    this.error = null
    if (this.form.invalid) {
      return
    }

    const next = (data) => {
      this.loading = false
      this.success = 'Đã đổi mật khẩu thành công.'
      this.form.reset()
    }

    const error = (error) => {
      this.error = error.error.message
      this.loading = false
    }
    this.loading = true
    this.authService.changePassword(this.f.oldPassword.value, this.f.newPassword.value).subscribe(next, error)

  }

}
