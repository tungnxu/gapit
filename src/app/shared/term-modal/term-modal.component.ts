import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { PageApi } from 'src/app/api/page.api';

@Component({
  selector: 'app-term-modal',
  templateUrl: './term-modal.component.html',
  styleUrls: ['./term-modal.component.scss']
})
export class TermModalComponent implements OnInit {
  bsSubmitContestModalRef: BsModalRef;
  content$ : Observable<string>
  constructor(public bsModalRef: BsModalRef,
    private pageApi: PageApi) { }

  ngOnInit(): void {
    this.content$ = this.pageApi.getPageContentById(3)
  }

}
