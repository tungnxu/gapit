import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StudentApi } from 'src/app/api/student.api';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { User } from 'src/app/types/models';

@Component({
  selector: 'app-submit-contest-modal',
  templateUrl: './submit-contest-modal.component.html',
  styleUrls: ['./submit-contest-modal.component.scss']
})
export class SubmitContestModalComponent implements OnInit {

  submitContestForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  error = ''

  user$ : Observable<User>

  constructor( public bsModalRef: BsModalRef ,
    private formBuilder: FormBuilder, 
    private studentApi: StudentApi, 
    private authService:AuthService,
    private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.submitContestForm = this.formBuilder.group({
      exam_name: ['', Validators.required],
      description: [''],
      file: ['', Validators.required],
      email: ['', Validators.required],
      isParent: [false]
    })

    this.user$ = this.authService.currentUser
  }

  get f() { return this.submitContestForm.controls }


  onSubmit() {
    this.submitted = true

    if (this.submitContestForm.invalid) {
      return
    }

    if(!this.f.isParent.value){
      this.error = 'Vui lòng xác nhận bạn là phụ huynh/người giám hộ, trước khi nộp bài'
      return
    }

    
    const form = new FormData()
    const fileName = (this.f.file.value as any)['name'] || 'unknownfile'
    form.append('file', this.f.file.value, fileName)
    form.append('exam_name', this.f.exam_name.value)
    form.append('email', this.f.email.value)
    form.append('description', this.f.description.value)

    const next = (student) => {
      this.localStorageService.set('student', JSON.stringify(student))
      this.authService.generateUserInfo()
      this.loading = false
      this.bsModalRef.hide()
    }

    const error = (error) => {
      this.error = error.error.message
      this.loading = false
    }
    this.loading = true
    this.studentApi.uploadExam(form).pipe(switchMap(()=> this.studentApi.getStudentInfo())).subscribe(next,error)

  }

}
