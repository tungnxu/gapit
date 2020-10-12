import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CountAnimationDirective } from 'src/app/shared/directives/count-animation.directive';

@Component({
  selector: 'app-commitment',
  templateUrl: './commitment.component.html',
})
export class CommitmentComponent implements OnInit {
  @ViewChild('ca', {static: true}) countAnimation: CountAnimationDirective
  currentData
  dataChilren = [
    {
      year: 2012,
      numOfChild: 100000
    },
    {
      year: 2013,
      numOfChild: 130000
    },
    {
      year: 2014,
      numOfChild: 320000
    },
    {
      year: 2015,
      numOfChild: 700000
    },
    {
      year: 2016,
      numOfChild: 1000000
    },
    {
      year: 2017,
      numOfChild: 1800000
    },
    {
      year: 2018,
      numOfChild: 4800000
    },
    {
      year: 2025,
      numOfChild: 1300000000
    },
  ];
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getDataChild(2025)
  }

  getDataChild(year: number) {
    this.currentData = this.dataChilren.find(x => x.year === year);
    this.countAnimation.changeNumber(this.currentData.numOfChild)
  }

  openModal(template: TemplateRef<any>) {
    const initialState = {

      backdrop: true,
      ignoreBackdropClick: true,
    };
    this.modalRef = this.modalService.show(template,  Object.assign({initialState}, { class: 'modal-lg modal-dialog-centered' }))
  }



}
