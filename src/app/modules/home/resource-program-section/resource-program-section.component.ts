import { Component, OnInit } from '@angular/core';
import { MainSlide } from 'src/app/types/models';

@Component({
  selector: 'app-resource-program-section',
  templateUrl: './resource-program-section.component.html',
  styleUrls: ['./resource-program-section.component.scss']
})
export class ResourceProgramSectionComponent implements OnInit {
  currentSlide: number = 0
  slideProgram: MainSlide[] = [
    {
      bigTitle: 'Kiểm tra & Phòng ngừa Nha khoa',
      smallTitle: 'Với hai ghế nha khoa cỡ trẻ em trên tàu, Colgate\'s Bright Smiles, Bright Futures® sẽ sàng lọc hai trẻ em cùng một lúc.',
      hasLable: true,
      imageUrl: 'assets/img/p-1.jpg',
      link: '#',
      buttonTitle: 'Lên lịch'
    },
    {
      bigTitle: 'Tình nguyện viên',
      smallTitle: 'Bạn muốn trở thành tình nguyện viên của Colgate Bright Smiles, Bright Futures? Bắt đầu bằng cách điền vào biểu mẫu quan tâm tình nguyện của chúng tôi.',
      hasLable: false,
      imageUrl: 'assets/img/p-2.jpg',
      link: '#',
      buttonTitle: 'Bắt đầu'
    },
    {
      bigTitle: 'Thư viện tranh',
      smallTitle: 'Thư viện trưng bày cuộc thi vẽ tranh Colgate Bright Smiles, Bright Futures',
      hasLable: false,
      imageUrl: 'assets/img/p-3.jpg',
      link: '/gallery',
      buttonTitle: 'Khám phá'
    },
    {
      bigTitle: 'Đăng ký dụng cụ học tập',
      smallTitle: 'Bạn muốn trở thành tình nguyện viên của Colgate Bright Smiles, Bright Futures? Bắt đầu bằng cách điền vào biểu mẫu quan tâm tình nguyện của chúng tôi.',
      hasLable: false,
      imageUrl: 'assets/img/p-4.jpg',
      link: '/stuff-registration',
      buttonTitle: 'Đăng ký'
    },
  ]

  slideConfig = {
    'dots': false,
    'infinite': true,
    'variableWidth': true,
    'responsive': [
      
      {
        'breakpoint': 600,
        'settings': {
          'slidesToShow': 1,
          'slidesToScroll': 1,
          'variableWidth': false,
        }
      },
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

  beforeChange(e) {
    this.currentSlide = e.nextSlide
  }

}
