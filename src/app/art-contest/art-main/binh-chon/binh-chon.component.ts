import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { VoteApi } from 'src/app/api/vote.api';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { GiftModalComponent } from 'src/app/shared/gift-modal/gift-modal.component';
import { VoteItem, QueryVote } from 'src/app/types/models';

@Component({
  selector: 'app-binh-chon',
  templateUrl: './binh-chon.component.html',
  styleUrls: ['./binh-chon.component.scss']
})
export class BinhChonComponent implements OnInit {

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
  examId = ""
  votedExams: any[] = []

  isLiking = false
  isDisLiking = false

  constructor(private modalService: BsModalService, private formBuilder: FormBuilder, private voteApi: VoteApi, private _router: Router, private localStorageService: LocalStorageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.examId = this.route.snapshot.queryParams['examId'] || ''
    this.votedExams = JSON.parse(this.localStorageService.get('vE')) || []
    this.fetch(1).subscribe((data: QueryVote) => {
      this.total = data.total
      this.lstPainting = data.data.map(x => {
        if (this.votedExams && this.votedExams.includes(x.ExamId)) {
          x.isLiked = true
        }
        return x;
      })
    })
  }


  private fetch(page): Observable<any> {
    const skip = (page - 1) * this.quantity
    return this.voteApi.getListVotesV2(skip, this.quantity, this.examId)
  }

  loadMore() {
    this.loadingVote = true
    this.page += 1
    this.fetch(this.page).subscribe((data: any) => {
      this.loadingVote = false
      const newData = data.data.map(x => {
        if (this.votedExams && this.votedExams.includes(x.ExamId)) {
          x.isLiked = true
        }
        return x;
      })
      this.lstPainting.push(...newData)
    })
  }

  openModal(examid: any) {

    const initialState = {
      animated: true,
      backdrop: true,
      ignoreBackdropClick: false,
      title: 'Modal with component',
      examid: examid
    };
    this.modalService.show(GiftModalComponent, { initialState, class: 'modal-md modal-dialog-centered modal-gift', animated: true });
  }

  fb(e, examId) {
    let url = 'https://nucuoirangrotuonglaituoisang.com/voting?examId=' + examId;
    console.log(url)
    e.preventDefault();
    var facebookWindow = window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' + url,
      'facebook-popup',
      'toolbar=0,status=0,resizable=1,height=350,width=600'
    );
    if (facebookWindow.focus) {
      facebookWindow.focus();
    }
    return false;
  }

  likePainting(examid) {
    this.isLiking = true
    // this.voteApi.likePainting(examid).subscribe((res: VoteResponse) => {
    //   const fPaint = this.lstPainting.find(x => x.ExamId == examid)
    //   fPaint.NumberOfLikes = res.NumberOfLikes
    //   fPaint.isLiked = true
    //   this.votedExams.push(examid)
    //   this.localStorageService.set('vE', JSON.stringify(this.votedExams))
    //   this.isLiking = false
    //   this.openModal(examid)
    // })
  }

  dislikePainting(examid) {
    if (confirm('Bạn có chắc muốn bỏ bình chọn bài thi này ?')) {
      this.isDisLiking = true
      // this.voteApi.dislikePainting(examid).subscribe((res: VoteResponse) => {
      //   const fPaint = this.lstPainting.find(x => x.ExamId == examid)
      //   fPaint.NumberOfLikes = res.NumberOfLikes
      //   fPaint.isLiked = false
      //   const index = this.votedExams.findIndex(obj => obj.id == examid)
      //   this.votedExams.splice(index, 1)
      //   this.localStorageService.set('vE', JSON.stringify(this.votedExams))
      //   this.isDisLiking = false
      // })
    }

  }

  onSearch(examId: string) {
    this._router.navigate([], {
      queryParams: {
        examId: examId
      },
      queryParamsHandling: 'merge',
    });
    this.examId = examId
    this.page = 1
    this.loading = true

    const error = (error) => {
      this.lstPainting = []
      this.loading = false
    }
    this.votedExams = JSON.parse(this.localStorageService.get('vE')) || []
    this.fetch(this.page).subscribe(data => {
      this.loading = false
      this.fetch(1).subscribe((data: QueryVote) => {
        this.total = data.total
        if (!data?.data) {
          this.lstPainting = []
        } else {
          this.lstPainting = data?.data?.map(x => {
            if (this.votedExams && this.votedExams.includes(x.ExamId)) {
              x.isLiked = true
            }
            return x;
          })
        }

      })
      this.total = data.count
    }, error)
  }

}
