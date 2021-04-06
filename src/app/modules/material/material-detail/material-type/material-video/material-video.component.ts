import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PlyrComponent } from 'ngx-plyr';
import { MaterialApi } from 'src/app/api/material.api';
import { download, getIdYoutube } from 'src/app/shared/common';
import { CategoryWP, MaterialListItemWP, MaterialWP } from 'src/app/types/models';

@Component({
  selector: 'app-material-video',
  templateUrl: './material-video.component.html',
})
export class MaterialVideoComponent implements OnChanges {
  @Input() material: MaterialWP

  moreMaterial: MaterialListItemWP[]

  rateMessage: string
  htmlVideo: string

  youtubeLink: any

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
    this.htmlVideo = this.material.content.rendered
    this.youtubeLink = this.getYoutubeLink(this.material.data.video_youtube_link)

    this.materialApi.getMaterials({ offset: 0, per_page: 4, material_categories:  10 })
    .subscribe(data =>{
      this.moreMaterial = (data.items as MaterialListItemWP[]).slice()
      const index = this.moreMaterial.findIndex(x => x.id === this.material.id)
      if (index > -1) {
        this.moreMaterial.splice(index, 1);
      }
    })
  }

  getYoutubeLink(url) 
  {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${getIdYoutube(url)}`) 
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

  getCategoryByType(item): CategoryWP {
    return item.categories.find(c => c.parent === 2)
  }

  styleText(text) : string{
    text = text.replace(/<br\s*\/?>/g,'\n');
    return text
  }

}
