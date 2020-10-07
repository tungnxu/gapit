import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-search-result-modal',
  templateUrl: './search-result-modal.component.html',
  styleUrls: ['./search-result-modal.component.scss']
})
export class SearchResultModalComponent implements OnInit {

  constructor( public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
