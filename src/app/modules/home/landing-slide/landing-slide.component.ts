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
      bigTitle: '',
      smallTitle: '',
      hasLable: false,
      imageUrl: 'assets/img/slide-art-contest.jpg',
      link: '/cuoc-thi-ve'
    },
    {
      bigTitle: 'Chương trình Nha Học Đường Colgate "Nụ cười rạng rỡ, Tương lai tươi sáng" đến với trẻ em trên toàn thế giới',
      smallTitle: 'GIÁO DỤC SỨC KHỎE RĂNG MIỆNG',
      hasLable: true,
      imageUrl: 'assets/img/colgate-draw.jpg',
      link: '#'
    },
    {
      bigTitle: 'Chương trình Nha Học Đường Colgate "Nụ cười rạng rỡ, Tương lai tươi sáng" đến với trẻ em trên toàn thế giới',
      smallTitle: 'GIÁO DỤC SỨC KHỎE RĂNG MIỆNG',
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
    'autoplay': false,
    'autoplaySpeed': 2000,
    'fade': true,
    'cssEase': 'linear'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
