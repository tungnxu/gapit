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
  voucherVoting: string

  constructor(
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private voteApi: VoteApi) { }

  ngOnInit() {
    this.giftForm = this.formBuilder.group({
      // phone: ["", Validators.pattern],
      email: [null, Validators.email],
    })
  }

  get f() { return this.giftForm.controls }


  onSubmit() {
    this.submitted = true

    if (this.giftForm.invalid) {
      return
    }

    if(!this.f.email.value ){
      this.error = 'Vui lòng điền email'
      return
    }


    const next = (data) => {
      this.loading = false
      if(data?.voucherVoting != '' )
      {
        this.isSuccess = true
        this.voucherVoting = data.voucherVoting
      }else{
        this.error = data.message
      }

    }

    const error = (error) => {
      this.error = error.message
      this.loading = false
    }
    this.loading = true
    this.voteApi.takeGift(this.examid, this.f.email.value).subscribe(next, error)

  }


}
