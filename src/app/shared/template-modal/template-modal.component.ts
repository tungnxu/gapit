import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { defineLocale, viLocale } from 'ngx-bootstrap/chronos';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LocationApi } from 'src/app/api/location.api';
import { StudentApi } from 'src/app/api/student.api';
import { District, Province, StudentRegistrationInfo } from 'src/app/types/models';

@Component({
  selector: 'app-template-modal',
  templateUrl: './template-modal.component.html',
  styleUrls: ['./template-modal.component.scss'],
  providers: [DatePipe]
})
export class TemplateModalComponent implements OnInit {
  registrationForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  error = ''

  provinces: Province[] = []
  district: District[] = []

  schoolProvinces: Province[] = []
  schoolDistrict: District[] = []
  bsConfig
  constructor(
    public bsModalRef: BsModalRef,
    private studentApi: StudentApi,
    private formBuilder: FormBuilder,
    private locationApi: LocationApi,
    private localeService: BsLocaleService,
    public datepipe: DatePipe) {
      defineLocale('vi', viLocale);
      localeService.use('vi');
      this.bsConfig = Object.assign({}, { containerClass: 'theme-red' });
     }

  ngOnInit(): void {
    this.locationApi.getProvinces().subscribe(data => {
      this.provinces = data
    })
    this.locationApi.getProvincesSchool().subscribe(data => {
      this.schoolProvinces = data
    })
    this.buildRegistrationForm()
  }

  buildRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      student_name: ['', Validators.required],
      student_date_of_birth: ['', Validators.required],
      student_province_id: [null, Validators.required],
      student_district_id: [null, Validators.required],
      student_address: ['', Validators.required],
      parent_name: ['', Validators.required],
      parent_phone: ['', [Validators.required, Validators.pattern]],
      parent_email: [''],
      school_name: ['', Validators.required],
      school_class: ['', Validators.required],
      school_address: ['', Validators.required],
      school_province_id: [null, Validators.required],
       school_district_id: [null, Validators.required],
       school_email: [''],
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

    const dob = this.datepipe.transform(this.registrationForm.value.student_date_of_birth, 'dd/MM/yyyy')
    const payload = Object.assign({}, this.registrationForm.value , { student_date_of_birth: dob }) 
    this.studentApi.studentRegister(payload).subscribe(next, error)

  }

  onProvinceChanged($event){
    this.district = this.provinces.find(x => x.value === this.registrationForm.value.student_province_id).districts
  }

  onSchoolProvinceChanged($event){
    this.schoolDistrict = this.schoolProvinces.find(x => x.value === this.registrationForm.value.school_province_id).districts
  }

}
