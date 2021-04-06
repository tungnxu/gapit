import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MaterialApi } from 'src/app/api/material.api';
import { FileService } from 'src/app/core/services/file-service.service';
import { download } from 'src/app/shared/common';
import { CategoryWP, MaterialWP } from 'src/app/types/models';

@Component({
  selector: 'app-material-standard',
  templateUrl: './material-standard.component.html',
})
export class MaterialStandardComponent implements OnInit {
  @Input() material: MaterialWP

  rateMessage: string
  

  slideConfig = {
    'dots': true,
    'arrows': true,
    'variableWidth': true,
  };
  constructor(private materialApi: MaterialApi, private fileService: FileService, private sanitizer: DomSanitizer) { }

  getCategoryByAge(item): CategoryWP {
    return item.categories.find(c => c.parent === 3)
  }

  getCategoryByActivity(item): CategoryWP {
    return item.categories.find(c => c.parent === 4)
  }


  ngOnInit(): void {
  }

  
  download(url){
    // this.fileService.downloadFile(url).subscribe(blob => {
    //   const a = document.createElement('a')
    //   const objectUrl = URL.createObjectURL(blob)
    //   a.href = objectUrl
    //   a.download = 'archive.pdf';
    //   a.click();
    //   URL.revokeObjectURL(objectUrl);
    // })

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

  styleText(text) : string{
    text = text.replace(/<br\s*\/?>/g,'\n');
    return text
  }
}
