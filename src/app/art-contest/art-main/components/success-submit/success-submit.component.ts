import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-submit',
  templateUrl: './success-submit.component.html',
  styleUrls: ['./success-submit.component.scss']
})
export class SuccessSubmitComponent implements OnInit {
  @Input() code: number
  constructor() { }

  ngOnInit(): void {
  }

}
