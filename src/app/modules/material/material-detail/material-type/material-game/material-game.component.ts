import { Component, Input, OnInit } from '@angular/core';
import { MaterialApi } from 'src/app/api/material.api';
import { download } from 'src/app/shared/common';
import { CategoryWP, MaterialWP } from 'src/app/types/models';

@Component({
  selector: 'app-material-game',
  templateUrl: './material-game.component.html',
})
export class MaterialGameComponent implements OnInit {
  @Input() material: MaterialWP

  rateMessage: string

  constructor(private materialApi: MaterialApi) { }

  getCategoryByAge(item): CategoryWP {
    return item.categories.find(c => c.parent === 3)
  }

  getCategoryByActivity(item): CategoryWP {
    return item.categories.find(c => c.parent === 4)
  }


  ngOnInit(): void {
  }

  download(url){
    download(url)
  }

  likeContent(){
    this.materialApi.likeMaterial(this.material.id).subscribe(like => {
      this.material.likeCount = like
      this.rateMessage = "Cảm ơn bạn đã đánh giá nội dung này !"
    })
  }

  dislikeContent(){
    this.rateMessage = "Cảm ơn bạn đã đánh giá nội dung này !"
  }

}
