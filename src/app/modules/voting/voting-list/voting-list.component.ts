import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GiftModalComponent } from 'src/app/shared/gift-modal/gift-modal.component';

@Component({
  selector: 'app-voting-list',
  templateUrl: './voting-list.component.html',
  styleUrls: ['./voting-list.component.scss']
})
export class VotingListComponent implements OnInit {
  modalRef: BsModalRef;

  giftForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  error = ''
  
  constructor(private modalService: BsModalService,private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

  }

  openModal() {

    const initialState = {
      animated: true,
      backdrop: true,
      ignoreBackdropClick: false,
    };
    const promotionModalRef = this.modalService.show(GiftModalComponent, Object.assign(initialState, { class: 'modal-md modal-dialog-centered modal-gift' , animated: false}));
  }

  fb(e) {
    let url = 'www.google.com';
    e.preventDefault();
    var facebookWindow = window.open(
      'https://www.facebook.com/sharer/sharer.php?u='+ url ,
      'facebook-popup',
      'toolbar=0,status=0,resizable=1,height=350,width=600'
    );
    if (facebookWindow.focus) {
      facebookWindow.focus();
    }
    return false;
  }

}
