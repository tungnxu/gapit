import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaintingApi } from 'src/app/api/painting.api';
import { getFileNameFromUrl } from 'src/app/shared/common';
import { PaintingWP } from 'src/app/types/models';
// import { PaintingWP } from 'src/app/types/models';

@Component({
  selector: 'tnx-painting-detail',
  templateUrl: './painting-detail.component.html',
})
export class PaintingDetailComponent implements OnInit {
  painting: PaintingWP
  ids: any[] = []

  constructor(private activeRouter: ActivatedRoute, private paintingApi: PaintingApi) { }

  ngOnInit(): void {
    this.activeRouter.data.subscribe(data => {
      this.painting = data.painting   
    })
    // this.paintingApi.getPaintings({offset: 0, per_page: 99}).subscribe(data => {
    //   debugger
    //   this.ids= data.items.map(x => x.id)
    // })
    //   this.painting = painting
    // })
  }

  getFileNameURL(url){
    return getFileNameFromUrl(url)
  }

}
