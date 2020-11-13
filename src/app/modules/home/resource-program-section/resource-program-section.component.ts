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
      bigTitle: 'Chuyến xe nha lưu động',
      smallTitle: 'Chúng tôi giáo dục và khám răng cho 10 triệu trẻ em mỗi năm, bao gồm cả tư vấn điều trị khi cần thiết.',
      hasLable: true,
      imageUrl: 'assets/img/p-1.jpg',
      link: '#',
      buttonTitle: 'Hành trình di chuyển của Xe Nha Lưu Động'
    },
    {
      bigTitle: 'Tình nguyện viên',
      smallTitle: 'Bạn muốn hỗ trợ hay đồng hành cùng sứ mệnh" Nụ cười rạng rỡ, Tương lai tươi sáng" của Colgate? Hãy đăng ký trở thành tình nguyện viên bằng cách điền vào biểu mẫu.',
      hasLable: false,
      imageUrl: 'assets/img/p-2.jpg',
      link: '#',
      buttonTitle: 'Đăng ký'
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
      bigTitle: 'Bộ Giáo Cụ Trực Quang ',
      smallTitle: 'Hãy truyền cảm hứng để trẻ nở những nụ cười rạng rỡ thông qua bộ giáo cụ trực quan gồm các trò chơi chăm sóc răng miệng thú vị, cùng các mẫu sản phẩm Colgate, và hơn thế nữa!',
      hasLable: false,
      imageUrl: 'assets/img/p-4.jpg',
      link: '/stuff-registration',
      buttonTitle: 'Đăng ký'
    },
    {
      bigTitle: 'Mẫu sản phẩm ',
      smallTitle: '',
      hasLable: false,
      imageUrl: 'assets/img/p-4.jpg',
      link: 'colgatepalmolive.com',
      buttonTitle: 'Áp phích'
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
