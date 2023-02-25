import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { defineLocale, viLocale } from 'ngx-bootstrap/chronos';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { LocationApi } from 'src/app/api/location.api';
import { StudentApi } from 'src/app/api/student.api';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { User, Province, District, Ward } from 'src/app/types/models';

@Component({
  selector: 'app-register-form-gv',
  templateUrl: './register-form-gv.component.html',
  styleUrls: ['./register-form-gv.component.scss'],

})
export class RegisterFormGVComponent implements OnInit, OnChanges {
  @Input() studentInfo : any
  @Output() onSubmitRegister = new EventEmitter()
  registrationForm: FormGroup
  loading = false
  returnUrl: string
  error = ''
  term$ = new BehaviorSubject<string>('');
  results$ = new Observable<string[]>()

  provinces: Province[] = []
  district: District[] = []
  ward: Ward[] = []

  schoolProvinces: Province[] = []
  schoolDistrict: District[] = []
  schools: string[]
  schoolList1 = []

  schoolTypeList = ["Mẫu giáo", "Tiểu học"]

  bsConfig : Partial<BsDatepickerConfig>

  lastkeydown1: number = 0;
  constructor(
    private studentApi: StudentApi,
    private formBuilder: FormBuilder,
    private locationApi: LocationApi,
    private localeService: BsLocaleService,
    public datepipe: DatePipe,
    private authService:AuthService,
    private localStorageService: LocalStorageService) {
    defineLocale('vi', viLocale);
    localeService.use('vi');
    this.bsConfig = Object.assign({}, { containerClass: 'theme-red', dateInputFormat: 'DD/MM/YYYY'});
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.studentInfo){
      console.log(this.studentInfo)
      this.registrationForm?.patchValue({
        student_name:  this.studentInfo.student_name,
        student_date_of_birth: this.studentInfo.student_date_of_birth,
        student_province_id: this.studentInfo.student_province_id,
        student_district_id: this.studentInfo.student_district_id,
        student_ward_id: this.studentInfo.student_ward_id,
        student_address: this.studentInfo.school_address,

        parent_name: this.studentInfo.parent_name,
        parent_phone: this.studentInfo.parent_phone,
        parent_email: this.studentInfo.parent_email,

        school_name: this.studentInfo.school_name,
        school_class: this.studentInfo.school_class,
        school_address: this.studentInfo.school_address,
        school_province_id: this.studentInfo.school_province_id,
        school_district_id: this.studentInfo.school_district_id,
        school_type: this.studentInfo.school_type,
        school_email: this.studentInfo.school_email,
      })

      this.district = this.provinces?.find(x => x.value === this.registrationForm?.value.student_province_id)?.districts
      this.ward = this.district.find(x => x.value === this.registrationForm?.value.student_district_id).wards
      this.schoolDistrict = this.schoolProvinces?.find(x => x.value === this.registrationForm?.value.school_province_id)?.schooldistricts
      // this.onProvinceChanged(null)
      // this.onDistrictChanged(null)
      // this.onSchoolProvinceChanged(null)
    }
  }

  ngOnInit(): void {


    this.locationApi.getProvinces().subscribe(data => {
      this.provinces = data
    })
    this.locationApi.getProvincesSchool().subscribe(data => {
      this.schoolProvinces = data
    })

    this.locationApi.getSchools().subscribe(data => {
      this.schools = data

    })

    this.term$.pipe(
      debounceTime(500),
      switchMap((term) => {
        if (term.length < 3) {
          return of([])
        }
        return of(this.searchFromArray(this.schools, term))
      }
      )
    ).subscribe(data => {
      // console.log(data)
      this.schoolList1 = data
    })



    this.buildRegistrationForm()
  }

  onInputChange($event) {
    this.term$.next($event.target.value)
  }

  buildRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      student_name: ['', [Validators.required, this.noWhitespaceValidator]],
      student_date_of_birth: ['', Validators.required],
      student_province_id: [null, Validators.required],
      student_district_id: [null, Validators.required],
      student_ward_id: [null, Validators.required],
      student_address: ['', [Validators.required , this.noWhitespaceValidator]],
      parent_name: ['', [Validators.required, this.noWhitespaceValidator]],
      parent_phone: ['', [Validators.required, Validators.pattern]],
      parent_email: ['',  [Validators.email]],
      school_name: ['', Validators.required],
      school_class: ['', Validators.required],
      school_address: ['', Validators.required],
      school_province_id: [null, Validators.required],
      school_district_id: [null, Validators.required],
      school_email: ['', [Validators.email]],
      school_type: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return
    }

    const next = (res: any) => {
      // this.localStorageService.set('student', JSON.stringify(student))
      // this.authService.generateUserInfo()
      this.loading = false
      const data = {
        name: this.registrationForm.value.student_name,
        id: res?.id
      }
      this.onSubmitRegister.next(data)

    }

    const error = (error: any) => {
      this.error = error.error.message
      this.loading = false
    }
    this.loading = true
    const dob = this.studentInfo?.student_date_of_birth ?? this.datepipe.transform(this.registrationForm.value.student_date_of_birth, 'dd/MM/yyyy')
    const payload = Object.assign({}, this.registrationForm.value, { student_date_of_birth: dob })
    if(this.studentInfo){
      payload.user_id = this.studentInfo.user_id
    }
    this.studentApi.studentRegister(payload).subscribe(next, error)

  }

  onProvinceChanged($event) {
    this.district = this.provinces?.find(x => x.value === this.registrationForm?.value.student_province_id)?.districts
    this.registrationForm?.controls['student_district_id'].patchValue(null)
    // this.registrationForm?.controls['student_ward_id'].patchValue(null)
  }

  onDistrictChanged($event){
    this.ward = this.district.find(x => x.value === this.registrationForm?.value.student_district_id).wards
    this.registrationForm?.controls['student_ward_id'].patchValue(null)
  }

  onSchoolProvinceChanged($event) {
    this.schoolDistrict = this.schoolProvinces?.find(x => x.value === this.registrationForm?.value.school_province_id)?.schooldistricts
    this.registrationForm?.controls['school_district_id'].patchValue(null)
  }

  getUserIdsFirstWay($event) {
    let userId = (<HTMLInputElement>document.getElementById('school_name')).value;
    this.schoolList1 = [];

    if (userId.length > 5) {
      if ($event.timeStamp - this.lastkeydown1 > 200) {
        this.schoolList1 = this.searchFromArray(this.schools, userId);
      }
    }
  }

  searchFromArray(items, text) {
    return items.filter(value => {
      return this.nonAccentVietnamese(value.toLowerCase()).indexOf(this.nonAccentVietnamese(text.toLowerCase())) >= 0;
    })
  }



  nonAccentVietnamese(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

}
