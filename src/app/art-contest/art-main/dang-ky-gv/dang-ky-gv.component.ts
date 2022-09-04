import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { defineLocale, viLocale } from 'ngx-bootstrap/chronos';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { LocationApi } from 'src/app/api/location.api';
import { StudentApi } from 'src/app/api/student.api';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Province, District, User, Exam } from 'src/app/types/models';

export enum RegisterState  {
  RegisterForm,
  SubmitForm,
  Success,
  EditForm,
}

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky-gv.component.html',
  styleUrls: ['./dang-ky-gv.component.scss'],
})
export class DangKyGVComponent implements OnInit {
  studentInfo: any
  currentUser: User
  currentExam : Exam
  formId: number
  registerState = new BehaviorSubject<RegisterState>(RegisterState.RegisterForm)


  constructor(
    public datepipe: DatePipe,
    private authService:AuthService) {
  }

  get state() {
    return this.registerState.asObservable()
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(userData => {
      this.currentUser = userData
      this.registerState.next(RegisterState.RegisterForm)
    })
  }

  onSubmitRegister($event){
    this.registerState.next(RegisterState.SubmitForm)
    this.formId = $event
  }

  onSubmitArt(){
    this.registerState.next(RegisterState.Success)
  }

  selectStudent(event){
    this.studentInfo = event
  }



}
