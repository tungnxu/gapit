import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StudentApi } from 'src/app/api/student.api';

@Component({
  selector: 'app-template-modal',
  templateUrl: './template-modal.component.html',
  styleUrls: ['./template-modal.component.scss']
})
export class TemplateModalComponent implements OnInit {

  registrationForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  error = ''

  constructor(
    public bsModalRef: BsModalRef,
    private studentApi: StudentApi,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildRegistrationForm()
  }

  buildRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      student_name: ['', Validators.required],
      province_id: ['', Validators.required],
      district_id: ['', Validators.required],
      address: ['', Validators.required],
      parent: ['', Validators.required],
      phone: ['', Validators.required],
      school_name: ['', Validators.required],
      school_province_id: ['', Validators.required],
      school_district_id: ['', Validators.required],
      school_address: ['', Validators.required],
      class: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  onSubmit() {
    this.submitted = true

    if (this.registrationForm.invalid) {
      return
    }

    const next = (data) => {
      this.loading = false
      this.bsModalRef.hide()
    }

    const error = (error: any) => {
      this.error = error.error.message
      this.loading = false
    }

    console.log(this.registrationForm.value)

    this.studentApi.studentRegister(this.registrationForm.value).subscribe(next, error)

  }

}
