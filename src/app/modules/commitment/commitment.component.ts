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
      numOfChild: 700000
    },
    {
      year: 2013,
      numOfChild: 750000
    },
    {
      year: 2014,
      numOfChild: 800000
    },
    {
      year: 2015,
      numOfChild: 850000
    },
    {
      year: 2016,
      numOfChild: 900000
    },
    {
      year: 2017,
      numOfChild: 950000
    },
    {
      year: 2018,
      numOfChild: 1000000
    },
    {
      year: 2019,
      numOfChild: 1200000
    },
    {
      year: 2020,
      numOfChild: 1300000
    },
    {
      year: 2025,
      numOfChild: 2000000
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
