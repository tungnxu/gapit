import { Component, OnInit } from '@angular/core';
import { VoteApi } from 'src/app/api/vote.api';
import { VoteItem, VotePainting } from 'src/app/types/models';

@Component({
  selector: 'app-voting-top',
  templateUrl: './voting-top.component.html',
  styleUrls: ['./voting-top.component.scss']
})
export class VotingTopComponent implements OnInit {
  votePaintings: VoteItem[] = []

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

  constructor(private voteApi: VoteApi) { }

  ngOnInit(): void {
    this.voteApi.getListVotes().subscribe( (data: VoteItem[]) =>{
      this.votePaintings = data
    })
  }

}
