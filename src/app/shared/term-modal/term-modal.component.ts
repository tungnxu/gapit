import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-term-modal',
  templateUrl: './term-modal.component.html',
  styleUrls: ['./term-modal.component.scss']
})
export class TermModalComponent implements OnInit {
  bsSubmitContestModalRef: BsModalRef;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
