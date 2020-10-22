import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaintingApi } from 'src/app/api/painting.api';
// import { PaintingWP } from 'src/app/types/models';

@Component({
  selector: 'tnx-painting-detail',
  templateUrl: './painting-detail.component.html',
})
export class PaintingDetailComponent implements OnInit {
  // painting: PaintingWP

  constructor(private activeRouter: ActivatedRoute, private paintingApi: PaintingApi) { }

  ngOnInit(): void {
    const paintingId = this.activeRouter.snapshot.params.id
    // this.paintingApi.getPaintingById(paintingId).subscribe(painting => {
    //   this.painting = painting
    // })
  }

}
