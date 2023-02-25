import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { combineLatest, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StudentApi } from 'src/app/api/student.api';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { User, Student, Exam } from 'src/app/types/models';

@Component({
  selector: 'app-contest-form',
  templateUrl: './contest-form.component.html',
  styleUrls: ['./contest-form.component.scss']
})
export class ContestFormComponent implements OnInit {
  @Input() formId?: number
  @Input() studentName?: string
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
      exam_name: ['', [Validators.required, this.noWhitespaceValidator]],
      description: [''],
      file: ['', Validators.required],
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
    // this.formId ?? form.append('form_id', this.formId + '' )

    const payload = {
      file: this.f.file.value,
      exam_name: this.f.exam_name.value,
      email: this.f.email.value,
      description: this.f.description.value,
      form_id: this.formId ?? null
    }

    Object.keys(payload).forEach(key => form.append(key, payload[key]));

    const next = (res: any) => {
      // this.localStorageService.set('student', JSON.stringify(student))
      // this.authService.generateUserInfo()
      this.loading = false
      // const idExam = student?.exams?.length == 1 ? student?.exams[0]?.id : student?.exams[1]?.id
      this.onSubmitArt.next(res.id)
    }

    const next2 = ([res, student]) => {
      this.localStorageService.set('student', JSON.stringify(student))
      this.authService.generateUserInfo()
      this.loading = false
      this.onSubmitArt.next(res.id)
    }

    const error = (error) => {
      this.error = error?.error?.Message
      this.loading = false
    }
    this.loading = true

    if (this.formId) {
      this.studentApi.uploadExam(form).subscribe(next, error)
    } else {
      this.studentApi.uploadExam(form).pipe(switchMap((res: any) => {
        return combineLatest([of(res), this.studentApi.getStudentInfo()]);
      })).subscribe(next2, error)
    }

  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

}
