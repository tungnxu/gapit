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
  constructor(private voteApi: VoteApi) { }

  ngOnInit(): void {
    this.voteApi.getTopVotes().subscribe( (data: VoteItem[]) =>{
      this.votePaintings = data
    })
  }

}
