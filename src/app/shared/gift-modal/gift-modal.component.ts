import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { first } from 'rxjs/operators'
import { VoteApi } from 'src/app/api/vote.api'
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
  examid:any
  closeBtnName: string
  bsRegisterModalRef: BsModalRef;

  giftForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  error = ''

  isSuccess:boolean

  constructor(
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private voteApi: VoteApi) { }

  ngOnInit() {
    this.giftForm = this.formBuilder.group({
      phone: [null, Validators.pattern],
      email: [null, Validators.email],
    })
  }

  get f() { return this.giftForm.controls }


  onSubmit() {
    this.submitted = true

    if (this.giftForm.invalid) {
      return
    }

    if(!this.f.phone.value && !this.f.email.value ){
      this.error = 'Vui lòng điền số điện thoại hoặc email'
      return
    }


    const next = (data) => {
      this.isSuccess = true
      this.loading = false
    }

    const error = (error) => {
      this.error = error.error.message
      this.loading = false
    }
    this.loading = true
    this.voteApi.takeGift(this.examid, this.f.phone.value, this.f.email.value).subscribe(next, error)

  }


}
