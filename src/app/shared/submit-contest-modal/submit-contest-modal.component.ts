import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-submit-contest-modal',
  templateUrl: './submit-contest-modal.component.html',
  styleUrls: ['./submit-contest-modal.component.scss']
})
export class SubmitContestModalComponent implements OnInit {

  constructor( public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
