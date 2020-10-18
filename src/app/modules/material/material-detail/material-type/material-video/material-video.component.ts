import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
import { MaterialApi } from 'src/app/api/material.api';
import { download } from 'src/app/shared/common';
import { CategoryWP, MaterialWP } from 'src/app/types/models';

@Component({
  selector: 'app-material-video',
  templateUrl: './material-video.component.html',
})
export class MaterialVideoComponent implements OnChanges {
  @Input() material: MaterialWP

  rateMessage: string
  htmlVideo: string

  @ViewChild(PlyrComponent)  plyr: PlyrComponent;
  player: Plyr;
  videoSources: any
 
  constructor(private materialApi: MaterialApi) { }

  getCategoryByAge(item): CategoryWP {
    return item.categories.find(c => c.parent === 3)
  }

  getCategoryByActivity(item): CategoryWP {
    return item.categories.find(c => c.parent === 4)
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.htmlVideo = this.material.content.rendered
    this.videoSources = [
      {
        src: this.material.data.video_youtube_link,
        provider: 'youtube',
      },
    ];
    
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
