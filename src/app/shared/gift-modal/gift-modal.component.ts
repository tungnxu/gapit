import { Component, OnInit } from '@angular/core'
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
  templateUrl: './gift-modal.component.html',
  styleUrls: ['./gift-modal.component.scss']
})
export class GiftModalComponent implements OnInit {
  title: string
  closeBtnName: string
  bsRegisterModalRef: BsModalRef;

  giftForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  error = ''

  constructor(
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.giftForm = this.formBuilder.group({
      phone: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  get f() { return this.giftForm.controls }


  onSubmit() {
    this.submitted = true

    if (this.giftForm.invalid) {
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
    // this.authService.login(this.f.username.value, this.f.password.value).subscribe(next, error)

  }


}
