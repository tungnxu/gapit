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
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss'],
})
export class DangKyComponent implements OnInit {
  currentUser: User
  currentExam : Exam
  registerState = new BehaviorSubject<RegisterState>(RegisterState.RegisterForm)
  code: number


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
      if(this.currentUser?.student?.student_info && this.currentUser?.student?.exams.length == 0) {
        this.registerState.next(RegisterState.SubmitForm)
      }

      if(this.currentUser?.student?.exams?.length > 0) {
        this.currentExam = this.currentUser?.student?.exams.find(x => x.status)
        this.registerState.next(RegisterState.EditForm)
      }

    })
  }

  onSubmitRegister(){
    this.registerState.next(RegisterState.SubmitForm)
  }

  onSubmitArt($event){
    this.registerState.next(RegisterState.Success)
    this.code = $event
  }



}
