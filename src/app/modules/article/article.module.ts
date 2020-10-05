import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostDetailComponent } from './post-detail/post-detail.component';


@NgModule({
  declarations: [ArticleComponent, PostDetailComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SharedModule
  ]
})
export class ArticleModule { }
