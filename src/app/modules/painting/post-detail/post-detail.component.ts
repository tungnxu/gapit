import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostApi } from 'src/app/api/post.api';
import { PostWP } from 'src/app/types/models';

@Component({
  selector: 'tnx-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: PostWP

  constructor(private activeRouter: ActivatedRoute, private postApi: PostApi) { }

  ngOnInit(): void {
    const postId = this.activeRouter.snapshot.params.id
    this.postApi.getPostById(postId).subscribe(post => {
      this.post = post
    })
  }

}
