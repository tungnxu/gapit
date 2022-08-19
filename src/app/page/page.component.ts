import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doSnap(){
    html2canvas(document.getElementById('bg1')).then(function(canvas) {
      document.body.appendChild(canvas);
  });
  }

}
