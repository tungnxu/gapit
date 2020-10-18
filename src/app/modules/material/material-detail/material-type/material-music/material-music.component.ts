import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
import * as Plyr from 'plyr';
import { MaterialApi } from 'src/app/api/material.api';
import { download, getFileNameFromUrl } from 'src/app/shared/common';
import { CategoryWP, MaterialWP } from 'src/app/types/models';

@Component({
  selector: 'app-material-music',
  templateUrl: './material-music.component.html',
})
export class MaterialMusicComponent implements OnChanges {
  @Input() material: MaterialWP

  rateMessage: string
  htmlMusic: string

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
    this.htmlMusic = this.material.content.rendered
    this.videoSources = [
      {
        src: this.material.data.music_youtube_link,
        provider: 'youtube',
      },
    ];
    
  }

 


  download(url){
    download(url, 'Bai-hat')
  }

  getFileNameURL(url){
    return getFileNameFromUrl(url)
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
