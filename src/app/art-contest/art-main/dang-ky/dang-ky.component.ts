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
import { Province, District, User } from 'src/app/types/models';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss'],
})
export class DangKyComponent implements OnInit {
  currentUser: User

  constructor(
    private studentApi: StudentApi,
    private formBuilder: FormBuilder,
    private locationApi: LocationApi,
    private localeService: BsLocaleService,
    public datepipe: DatePipe,
    private authService:AuthService,
    private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(userData => {
      this.currentUser = userData
    })
  }



}
