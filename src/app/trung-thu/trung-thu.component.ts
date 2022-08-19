import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SubmitImageModalComponent } from '../shared/submit-image-modal/submit-image-modal.component';

@Component({
  selector: 'app-trung-thu',
  templateUrl: './trung-thu.component.html',
  styleUrls: ['./trung-thu.component.scss']
})
export class TrungThuComponent implements OnInit {

  bsSubmitImageModalRef: BsModalRef;
  fileUrl: string
  frameUrl: string
  x: number
  y: number
  constructor(private modalService: BsModalService,) { }

  ngOnInit(): void {
    this.openTickerModal()
  }

  openTickerModal() {
    const initialState = {

      backdrop: true,
      class: 'modal-lg modal-dialog-centered',
      ignoreBackdropClick: true,
    };
    this.bsSubmitImageModalRef = this.modalService.show(SubmitImageModalComponent, initialState);
    this.bsSubmitImageModalRef.content.closeBtnName = 'Close';
  }

}
