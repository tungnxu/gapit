import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { QueryResultBase, PostWP } from '../types/models';
import { BaseApi } from './base-api.class';
import { cmsUrl } from './base-url.class';

@Injectable({
  providedIn: 'root'
})
export class PageApi extends BaseApi {
  constructor(
    httpClient: HttpClient,
    @Inject(cmsUrl) protected hostUrl: string,
  ) {
    super(httpClient)
    this.setEndpoint(hostUrl, '/wp/v2/Pages')
  }

  getPageContentById(pageId: number) {
    // params._fields = 'id,excerpt,title,modified,status,slug,categories'
    return this.httpClient.get<PostWP>(this.createUrl(`${pageId}`))
  }

}
