import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StudentApi } from 'src/app/api/student.api';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { User, Student } from 'src/app/types/models';

@Component({
  selector: 'app-contest-form',
  templateUrl: './contest-form.component.html',
  styleUrls: ['./contest-form.component.scss']
})
export class ContestFormComponent implements OnInit {

  submitContestForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  error = ''
  success = ''

  user$ : Observable<User>

  constructor(
    private formBuilder: FormBuilder,
    private studentApi: StudentApi,
    private authService:AuthService,
    private localStorageService: LocalStorageService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.submitContestForm = this.formBuilder.group({
      exam_name: ['', Validators.required],
      description: [''],
      file: ['', Validators.required ],
      email: [''],
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
    const fileSize = (this.f.file.value as any)['size']

    if(fileSize > 5000000){
      this.error = 'File tải vượt quá dung lượng 5MB'
      return
    }

    form.append('file', this.f.file.value, fileName)
    form.append('exam_name', this.f.exam_name.value)
    form.append('email', this.f.email.value)
    form.append('description', this.f.description.value)

    const next = (student: Student) => {
      this.localStorageService.set('student', JSON.stringify(student))
      // console.log(student)
      this.authService.generateUserInfo()
      this.loading = false
      const idExam = student?.exams?.length == 1 ? student?.exams[0]?.id : student?.exams[1]?.id
      this.success = 'Bài dự thi đã được gửi thành công. Mã tác phẩm: ' + idExam + '\nEmail/sms xác nhận sẽ được gửi lại trong vòng 24h-48h.'
      // this.bsModalRef.hide()
      // this.toastr.info('Bạn đã gửi bài thành công ! ', '', {
      //   timeOut: 6000,
      //   positionClass: 'toast-top-center',
      // });
    }

    const error = (error) => {
      this.error = error.error.message
      this.loading = false
    }
    this.loading = true
    this.studentApi.uploadExam(form).pipe(switchMap(()=> this.studentApi.getStudentInfo())).subscribe(next,error)

  }

}
