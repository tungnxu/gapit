import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { BsModalRef } from 'ngx-bootstrap/modal'
import { first } from 'rxjs/operators'
import { AuthService } from 'src/app/core/services/auth.service'
import { JWTTokenService } from 'src/app/core/services/jwt-token.service'
import { LocalStorageService } from 'src/app/core/services/local-storage.service'

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  title: string
  closeBtnName: string

  loginForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  error = ''

  constructor(
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

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
    this.authService.login(this.f.username.value, this.f.password.value).subscribe(next, error)

  }

}
