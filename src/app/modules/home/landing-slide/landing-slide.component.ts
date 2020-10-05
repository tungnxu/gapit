import { Component, OnInit } from '@angular/core';
import { MainSlide } from 'src/app/types/models';

@Component({
  selector: 'app-landing-slide',
  templateUrl: './landing-slide.component.html',
  styleUrls: ['./landing-slide.component.scss']
})
export class LandingSlideComponent implements OnInit {
  slideLanding: MainSlide[] = [
    {
      bigTitle: 'Tạo nụ cười rạng rỡ, tương lai tươi sáng thông qua giáo dục sức khỏe răng miệng',
      smallTitle: 'GIÁO DỤC SỨC KHỎE HAY',
      hasLable: true,
      imageUrl: 'assets/img/hero-img.jpg',
      link: '#'
    },
    {
      bigTitle: 'Tạo nụ cười rạng rỡ, tương lai tươi sáng thông qua giáo dục sức khỏe răng miệng',
      smallTitle: 'Tiêu đề slide nhỏ',
      hasLable: false,
      imageUrl: 'assets/img/smile.jpg',
      link: '#'
    }
  ]
 
  slideConfig = { 
    'dots': true,
    'infinite': true,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'arrows': false,
    'autoplay': true,
    'autoplaySpeed': 2000,
    'fade': true,
    'cssEase': 'linear'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
