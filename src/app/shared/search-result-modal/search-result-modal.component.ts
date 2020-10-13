import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { delay } from 'rxjs/operators';
import { SingleApi } from 'src/app/api/single.api';
import { ResultExam } from 'src/app/types/models';

@Component({
  selector: 'app-search-result-modal',
  templateUrl: './search-result-modal.component.html',
  styleUrls: ['./search-result-modal.component.scss']
})
export class SearchResultModalComponent implements OnInit {

  result: ResultExam

  resultForm: FormGroup
  loading = false
  returnUrl: string
  error = ''
  constructor( public bsModalRef: BsModalRef,  private formBuilder: FormBuilder, private singleApi: SingleApi) { }

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
