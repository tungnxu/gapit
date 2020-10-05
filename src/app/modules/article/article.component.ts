import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryApi } from 'src/app/api/category.api';
import { PostApi } from 'src/app/api/post.api';
import { CategoryWP, PostWP, QueryResultBase } from 'src/app/types/models';

@Component({
  selector: 'tnx-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit {
  posts: PostWP[]
  categories: CategoryWP[]

  constructor(private postApi: PostApi, private categoryApi: CategoryApi) { }

  ngOnInit(): void {
    this.postApi.getPosts({offset: 0,per_page: 10 }).subscribe((res: QueryResultBase<PostWP>) => {
      this.posts = res.items
    })

    this.categoryApi.getAllCategories().subscribe((res: CategoryWP[]) => {
      this.categories = res
    })
  }

}
