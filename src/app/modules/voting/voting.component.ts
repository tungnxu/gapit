import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SubmitImageModalComponent } from 'src/app/shared/submit-image-modal/submit-image-modal.component';
import domtoimage from 'dom-to-image';
@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {

  bsSubmitImageModalRef: BsModalRef;
  fileUrl: string
  frameUrl: string
  x: number
  y: number
  constructor(private modalService: BsModalService,) { }

  ngOnInit(): void {
    // this.openTickerModal()
  }

  
  openTickerModal() {
    const initialState = {

      backdrop: true,
      ignoreBackdropClick: true,
    };
    this.bsSubmitImageModalRef = this.modalService.show(SubmitImageModalComponent, Object.assign({ initialState }, { class: 'modal-lg modal-dialog-centered' }));
    this.bsSubmitImageModalRef.content.closeBtnName = 'Close';
  }

}
