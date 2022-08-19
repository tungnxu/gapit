import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { SingleApi } from 'src/app/api/single.api';
import { ResultExam } from 'src/app/types/models';

@Component({
  selector: 'app-xem-ket-qua',
  templateUrl: './xem-ket-qua.component.html',
  styleUrls: ['./xem-ket-qua.component.scss']
})
export class XemKetQuaComponent implements OnInit {

  result: ResultExam

  resultForm: FormGroup
  loading = false
  returnUrl: string
  error = ''
  constructor(  private formBuilder: FormBuilder, private singleApi: SingleApi) { }

  ngOnInit(): void {
    this.resultForm = this.formBuilder.group({
      code: ['', Validators.required],
    })
  }

  get f() { return this.resultForm.controls }


  onSubmit() {
    this.error = null
    if (this.resultForm.invalid) {
      return
    }

    const next = (data) => {
      this.loading = false
      this.result = data
    }

    const error = (error) => {
      this.error = error.error.message
      this.loading = false
    }
    this.loading = true
    this.singleApi.getResultInfo(this.f.code.value).pipe(delay(1000)).subscribe(next, error)

  }

}
