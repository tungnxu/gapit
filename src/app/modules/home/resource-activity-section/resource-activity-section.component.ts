import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-activity-section',
  templateUrl: './resource-activity-section.component.html',
  styleUrls: ['./resource-activity-section.component.scss']
})
export class ResourceActivitySectionComponent implements OnInit {

  activityList: any[] = [
    {
      link: `/material/by-activity/16`,
      image: `assets/img/a-1.jpg`,
      title: ` Màu sắc`,
    },
    {
      link: `/material/by-activity/17`,
      image: `assets/img/a-2.jpg`,
      title: `Lắng nghe`,
    },
    {
      link: `/material/by-activity/18`,
      image: `assets/img/a-3.jpg`,
      title: `Chơi`,
    },
    {
      link: `/material/by-activity/19`,
      image: `assets/img/a-4.jpg`,
      title: `Kiểm tra`,
    },
    {
      link: `/material/by-activity/20`,
      image: `assets/img/a-5.jpg`,
      title: `Đọc`,
    },
    {
      link: `/material/by-activity/21`,
      image: `assets/img/a-6.jpg`,
      title: `Hát`,
    },
    {
      link: `/material/by-activity/22`,
      image: `assets/img/a-7.jpg`,
      title: `Xem`,
    },
  ]

  constructor() { }

  slideConfig = {
    'dots': false,
    'infinite': false,
    'variableWidth': true
  };
  ngOnInit(): void {
  }

}
