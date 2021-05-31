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
  selector: 'app-promotion-modal',
  templateUrl: './promotion-modal.component.html',
  styleUrls: ['./promotion-modal.component.scss']
})
export class PromotionModalComponent implements OnInit {
  title: string
  closeBtnName: string
  bsRegisterModalRef: BsModalRef;

  promotionForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  error = ''

  constructor(
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private modalService: BsModalService,) { }

  ngOnInit() {

  }

  openRegisterModal() {
   this.router.navigate(['/voting'])
   this.bsModalRef.hide()
  }

}
