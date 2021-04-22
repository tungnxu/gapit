import { Component, OnInit } from '@angular/core';
import { VotePainting } from 'src/app/types/models';

@Component({
  selector: 'app-voting-top',
  templateUrl: './voting-top.component.html',
  styleUrls: ['./voting-top.component.scss']
})
export class VotingTopComponent implements OnInit {
  votePaintings: VotePainting[] = [
    {
      id: 1,
      title: 'Ngựa hồng',
      imageUrl: 'assets/img/artpix.jpg',
      like: 3534
    },
    {
      id: 2,
      title: '4 mùa tươi đẹp',
      imageUrl: 'assets/img/artpix.jpg',
      like: 234
    },
    {
      id: 3,
      title: 'sư tử vàng',
      imageUrl: 'assets/img/artpix.jpg',
      like: 546
    },
    {
      id: 4,
      title: 'Yêu hòa bình',
      imageUrl: 'assets/img/artpix.jpg',
      like: 3453
    },
    {
      id: 5,
      title: 'Chiến dịch phòng chống corona',
      imageUrl: 'assets/img/artpix.jpg',
      like: 4564
    },
    {
      id: 6,
      title: 'Chiến dịch phòng chống corona',
      imageUrl: 'assets/img/artpix.jpg',
      like: 4564
    },
    {
      id: 7,
      title: 'Chiến dịch phòng chống corona',
      imageUrl: 'assets/img/artpix.jpg',
      like: 4564
    },
   
  ]

  slideConfig = {
    'centerMode': true,
    'slidesToShow': 5,
    'slidesToScroll': 1,
    'dots': false,
    'infinite': true,
    'centerPadding': 80,
    'arrows': true,
    'responsive': [
      {
        'breakpoint': 1024,
        'settings': {
          'centerMode': false,
          'centerPadding': 40,
          'slidesToShow': 3
        }
      },
      {
        'breakpoint': 480,
        'settings': {
          'centerMode': true,
          'centerPadding': 40,
          'slidesToShow': 1
        }
      }
    ]
  };

  // slides = [
  //   {img: 'http://placehold.it/350x150/000000'},
  //   {img: 'http://placehold.it/350x150/111111'},
  //   {img: 'http://placehold.it/350x150/222222'},
  //   {img: 'http://placehold.it/350x150/333333'},
  //   {img: 'http://placehold.it/350x150/444444'},
  //   {img: 'http://placehold.it/350x150/555555'}
  // ];
  // slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4};

  constructor() { }

  ngOnInit(): void {
  }

}
