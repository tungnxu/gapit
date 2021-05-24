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
  templateUrl: './noti-modal.component.html',
  styleUrls: ['./noti-modal.component.scss']
})
export class NotiModalComponent implements OnInit {
  title: string
  examid:any
  closeBtnName: string
  bsRegisterModalRef: BsModalRef;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    
  }

}
