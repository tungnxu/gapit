import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { defineLocale, viLocale } from 'ngx-bootstrap/chronos';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { debounceTime, switchMap, takeUntil, skip, tap } from 'rxjs/operators';
import { LocationApi } from 'src/app/api/location.api';
import { StudentApi } from 'src/app/api/student.api';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { District, Province, StudentRegistrationInfo } from 'src/app/types/models';
import { SubmitContestModalComponent } from '../submit-contest-modal/submit-contest-modal.component';

@Component({
  selector: 'app-template-modal',
  templateUrl: './template-modal.component.html',
  styleUrls: ['./template-modal.component.scss'],
  providers: [DatePipe]
})
export class TemplateModalComponent implements OnInit {
  registrationForm: FormGroup
  loading = false
  returnUrl: string
  error = ''
  term$ = new BehaviorSubject<string>('');
  results$ = new Observable<string[]>()
  bsSubmitContestModalRef: BsModalRef;

  provinces: Province[] = []
  district: District[] = []

  schoolProvinces: Province[] = []
  schoolDistrict: District[] = []
  schools: string[]
  schoolList1 = []

  bsConfig : Partial<BsDatepickerConfig>

  lastkeydown1: number = 0;
  constructor(
    public bsModalRef: BsModalRef,
    private studentApi: StudentApi,
    private formBuilder: FormBuilder,
    private locationApi: LocationApi,
    private localeService: BsLocaleService,
    private modalService: BsModalService,
    public datepipe: DatePipe,
    private authService:AuthService,
    private localStorageService: LocalStorageService) {
    defineLocale('vi', viLocale);
    localeService.use('vi');
    this.bsConfig = Object.assign({}, { containerClass: 'theme-red', dateInputFormat: 'DD/MM/YYYY'});
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
      student_name: ['', Validators.required],
      student_date_of_birth: ['', Validators.required],
      student_province_id: [null, Validators.required],
      student_district_id: [null, Validators.required],
      student_address: ['', Validators.required],
      parent_name: ['', Validators.required],
      parent_phone: ['', [Validators.required, Validators.pattern]],
      parent_email: ['',  [Validators.email]],
      school_name: ['', Validators.required],
      school_class: ['', Validators.required],
      school_address: ['', Validators.required],
      school_province_id: [null, Validators.required],
      school_district_id: [null, Validators.required],
      school_email: [''],
    })
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return
    }

    const next = (student) => {
      this.localStorageService.set('student', JSON.stringify(student))
      this.authService.generateUserInfo()
      this.loading = false
      this.bsModalRef.hide()
      this.openSubmitContestModal()

    }

    const error = (error: any) => {
      this.error = error.error.message
      this.loading = false
    }
    this.loading = true
    const dob = this.datepipe.transform(this.registrationForm.value.student_date_of_birth, 'dd/MM/yyyy')
    const payload = Object.assign({}, this.registrationForm.value, { student_date_of_birth: dob })
    this.studentApi.studentRegister(payload).pipe(switchMap(()=> this.studentApi.getStudentInfo())).subscribe(next, error)

  }

  onProvinceChanged($event) {
    this.district = this.provinces.find(x => x.value === this.registrationForm.value.student_province_id).districts
  }

  onSchoolProvinceChanged($event) {
    this.schoolDistrict = this.schoolProvinces.find(x => x.value === this.registrationForm.value.school_province_id).districts
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

  openSubmitContestModal(){
    const initialState = {

      backdrop: true,
      ignoreBackdropClick: true,
    };
    this.bsSubmitContestModalRef = this.modalService.show(SubmitContestModalComponent, Object.assign({initialState}, { class: 'modal-md modal-dialog-centered' }));
    this.bsSubmitContestModalRef.content.closeBtnName = 'Close';
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

}
