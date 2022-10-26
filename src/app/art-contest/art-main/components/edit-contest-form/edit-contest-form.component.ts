import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StudentApi } from 'src/app/api/student.api';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { User, Student, Exam } from 'src/app/types/models';

@Component({
  selector: 'app-edit-contest-form',
  templateUrl: './edit-contest-form.component.html',
  styleUrls: ['./edit-contest-form.component.scss']
})
export class EditContestFormComponent implements OnInit {
  @Input() exam: Exam
  @Output() onSubmitArt = new EventEmitter<number>()
  submitContestForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  error = ''
  success = ''
  firstExam: Exam

  user$: Observable<User>

  constructor(
    private formBuilder: FormBuilder,
    private studentApi: StudentApi,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private toastr: ToastrService) { }



  ngOnInit(): void {
    this.submitContestForm = this.formBuilder.group({
      exam_name: [this.exam.name_exam, Validators.required],
      description: [this.exam.description],
      file: [this.exam.url, Validators.required],
      email: [this.exam.email],
      isParent: [false]
    })




    this.user$ = this.authService.currentUser
  }


  get f() { return this.submitContestForm.controls }

  isLinkData(): boolean {
    return typeof this.submitContestForm.value.file == "string" && this.submitContestForm.value.file.startsWith('http')
  }

  onSubmit() {
    this.submitted = true

    if (this.submitContestForm.invalid) {
      return
    }

    if (!this.f.isParent.value) {
      this.error = 'Vui lòng xác nhận bạn là phụ huynh/người giám hộ, trước khi nộp bài'
      return
    }


    const form = new FormData()
    const fileName = (this.f.file.value as any)['name'] || 'unknownfile'
    const fileSize = (this.f.file.value as any)['size']

    if (fileSize > 5000000) {
      this.error = 'File tải vượt quá dung lượng 5MB'
      return
    }

    // form.append('file', this.f.file.value, fileName)
    // form.append('exam_name', this.f.exam_name.value)
    // form.append('email', this.f.email.value)
    // form.append('description', this.f.description.value)

    const payload = {
      file: this.f.file.value,
      exam_name: this.f.exam_name.value,
      email: this.f.email.value,
      description: this.f.description.value,
    }

    Object.keys(payload).forEach(key => form.append(key, payload[key]));

    const next = (res) => {
      // this.localStorageService.set('student', JSON.stringify(student))
      // // console.log(student)
      // this.authService.generateUserInfo()
      // this.loading = false
      // const idExam = student?.exams?.length == 1 ? student?.exams[0]?.id : student?.exams[1]?.id
      // this.onSubmitArt.next()

      this.loading = false
      // const idExam = student?.exams?.length == 1 ? student?.exams[0]?.id : student?.exams[1]?.id
      this.onSubmitArt.next(res.id)
      // this.bsModalRef.hide()
      // this.toastr.info('Bạn đã gửi bài thành công ! ', '', {
      //   timeOut: 6000,
      //   positionClass: 'toast-top-center',
      // });
    }

    const error = (error) => {
      this.error = error?.error?.Message
      this.loading = false
    }
    this.loading = true
    this.studentApi.uploadExam(form).subscribe(next, error)
    // this.studentApi.reUploadExam(form).pipe(switchMap(() => this.studentApi.getStudentInfo())).subscribe(next, error)

  }

}
