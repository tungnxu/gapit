import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { VoteApi } from 'src/app/api/vote.api';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { GiftModalComponent } from 'src/app/shared/gift-modal/gift-modal.component';
import { QueryVote, VoteItem, VoteResponse } from 'src/app/types/models';

@Component({
  selector: 'app-voting-list',
  templateUrl: './voting-list.component.html',
  styleUrls: ['./voting-list.component.scss']
})
export class VotingListComponent implements OnInit {
  modalRef: BsModalRef;
  lstPainting: VoteItem[] = []

  giftForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  error = ''

  quantity = 12
  page = 1
  total: number
  loadingVote: boolean

  votedExams : any[] = []
  
  constructor(private modalService: BsModalService,private formBuilder: FormBuilder, private voteApi: VoteApi, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.votedExams = JSON.parse(this.localStorageService.get('vE')) || []
    this.fetch(1).subscribe( (data: QueryVote) => {
      this.total = data.total
      this.lstPainting = data.data.map(x => {
        if(this.votedExams && this.votedExams.includes(x.ExamId)){
          x.isLiked = true
        }
        return x;
      })
    })
  }


  private fetch(page): Observable<any> {
    const skip = (page - 1) * this.quantity
    return this.voteApi.getListVotes(skip, this.quantity)
  }

  loadMore() {
    this.loadingVote = true
    this.page += 1
    this.fetch(this.page).subscribe((data: any) => {
      this.loadingVote = false
      const newData = data.data.map(x => {
        if(this.votedExams && this.votedExams.includes(x.ExamId)){
          x.isLiked = true
        }
        return x;
      })
      this.lstPainting.push(...newData)
    })
  }

  openModal() {

    const initialState = {
      animated: true,
      backdrop: true,
      ignoreBackdropClick: false,
    };
    const promotionModalRef = this.modalService.show(GiftModalComponent, Object.assign(initialState, { class: 'modal-md modal-dialog-centered modal-gift' , animated: true}));
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

  likePainting(examid){
    this.voteApi.likePainting(examid).subscribe((res: VoteResponse) =>{
      const fPaint = this.lstPainting.find(x => x.ExamId == examid)
      fPaint.NumberOfLikes = res.NumberOfLikes
      fPaint.isLiked = true
      this.votedExams.push(examid)
      this.localStorageService.set('vE', JSON.stringify(this.votedExams))
      this.openModal()
    })
  }

  dislikePainting(examid){
    this.voteApi.dislikePainting(examid).subscribe((res: VoteResponse) =>{
      const fPaint = this.lstPainting.find(x => x.ExamId == examid)
      fPaint.NumberOfLikes = res.NumberOfLikes
      fPaint.isLiked = false
      const index = this.votedExams.findIndex(obj => obj.id == examid)
      this.votedExams.splice(index,1)
      this.localStorageService.set('vE', JSON.stringify(this.votedExams))
    })
  }

}
