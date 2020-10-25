import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PlyrComponent } from 'ngx-plyr';
import * as Plyr from 'plyr';
import { MaterialApi } from 'src/app/api/material.api';
import { download, getFileNameFromUrl, getIdYoutube } from 'src/app/shared/common';
import { CategoryWP, MaterialWP } from 'src/app/types/models';

@Component({
  selector: 'app-material-music',
  templateUrl: './material-music.component.html',
})
export class MaterialMusicComponent implements OnChanges {
  @Input() material: MaterialWP

  rateMessage: string
  htmlMusic: string

  youtubeLink

  @ViewChild(PlyrComponent)  plyr: PlyrComponent;
  player: Plyr;
  videoSources: any
 
  constructor(private materialApi: MaterialApi, private sanitizer: DomSanitizer) { }

  getCategoryByAge(item): CategoryWP {
    return item.categories.find(c => c.parent === 3)
  }

  getCategoryByActivity(item): CategoryWP {
    return item.categories.find(c => c.parent === 4)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.htmlMusic = this.material.content.rendered
    this.youtubeLink = this.getYoutubeLink(this.material.data.music_youtube_link)
  }

  getYoutubeLink(url) 
  {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${getIdYoutube(url)}`) 
  }

 


  download(url){
    download(url)
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

  stateChange(event ){
    const code = event.detail.code; if(code == 1) this.player.play();
  }

}
