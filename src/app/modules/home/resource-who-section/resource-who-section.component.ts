import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { ResourceListItem } from 'src/app/types/models';

@Component({
  selector: 'app-resource-who-section',
  templateUrl: './resource-who-section.component.html',
  styleUrls: ['./resource-who-section.component.scss']
})
export class ResourceWhoSectionComponent implements OnInit {
  public slickModal: SlickCarouselComponent;
  currentResourceList: ResourceListItem[]= [
    {
            link: '#',
            title: 'Tài nguyên thuộc nhóm gia đình',
            thumbnailUrl: 'assets/img/t-4.jpg'
          }
  ]


  slideConfig = {
    'dots': false,
    'infinite': true,
    'variableWidth': true
  };
  constructor() { }

  ngOnInit(): void {
  }

  removeSlide() {
    this.currentResourceList.length = 0;
  }
  

  getCategory(tagId) {
    this.slickModal.unslick()
    this.currentResourceList = []
    
    if (tagId == 10) {
      this.currentResourceList = [
        {
          link: '#',
          title: 'Tài nguyên thuộc nhóm gia đình',
          thumbnailUrl: 'assets/img/t-4.jpg'
        },
        {
          link: '#',
          title: 'Tài nguyên thuộc nhóm gia đình',
          thumbnailUrl: 'assets/img/t-4.jpg'
        },
        {
          link: '#',
          title: 'Tài nguyên thuộc nhóm gia đình',
          thumbnailUrl: 'assets/img/t-4.jpg'
        },
        {
          link: '#',
          title: 'Tài nguyên thuộc nhóm gia đình',
          thumbnailUrl: 'assets/img/t-4.jpg'
        },
        {
          link: '#',
          title: 'Tài nguyên thuộc nhóm gia đình',
          thumbnailUrl: 'assets/img/t-4.jpg'
        },
        {
          link: '#',
          title: 'Tài nguyên thuộc nhóm gia đình',
          thumbnailUrl: 'assets/img/t-4.jpg'
        },
        {
          link: '#',
          title: 'Tài nguyên thuộc nhóm gia đình',
          thumbnailUrl: 'assets/img/t-4.jpg'
        },

      ]

    } else {
      this.currentResourceList = [
        {
          link: '#',
          title: 'Chompers: Loose in Tooth City',
          thumbnailUrl: 'assets/img/t-1.jpg'
        },
        {
          link: '#',
          title: 'Chompers: Loose in Tooth City 1',
          thumbnailUrl: 'assets/img/t-1.jpg'
        },
        {
          link: '#',
          title: 'Chompers: Loose in Tooth City 1',
          thumbnailUrl: 'assets/img/t-1.jpg'
        },
        {
          link: '#',
          title: 'Chompers: Loose in Tooth City 1',
          thumbnailUrl: 'assets/img/t-1.jpg'
        },
        {
          link: '#',
          title: 'Chompers: Loose in Tooth City 1',
          thumbnailUrl: 'assets/img/t-1.jpg'
        },
        {
          link: '#',
          title: 'Chompers: Loose in Tooth City 1',
          thumbnailUrl: 'assets/img/t-1.jpg'
        }
      ]
    }

  }

  slickInit(e) {
   this.slickModal = e.slick
  }
  

}
