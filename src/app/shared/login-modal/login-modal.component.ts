import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { BsModalRef } from 'ngx-bootstrap/modal'
import { first } from 'rxjs/operators'

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
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
  }

  get f() { return this.loginForm.controls }


  onSubmit() {
    this.submitted = true

    if (this.loginForm.invalid) {
      return
    }
    console.log(this.loginForm.value)
    this.loading = true

  }
}
