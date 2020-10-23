import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PaintingListItemWP, PaintingWP } from '../types/models';
import { BaseApi } from './base-api.class';
import { cmsUrl } from './base-url.class';

@Injectable({
  providedIn: 'root'
})
export class PaintingApi extends BaseApi {
  constructor(
    httpClient: HttpClient,
    @Inject(cmsUrl) protected hostUrl: string,
  ) {
    super(httpClient)
    this.setEndpoint(hostUrl, '/wp/v2/paintings')
  }

  getPaintings(params?: { _fields?: string, offset?: number; per_page?: number, search?: string, Painting_categories?: number }, sort?: string) {
    params._fields = 'id,title,slug,categories,painting_categories,data,thumbnailUrl,likeCount,featured_media,date'
    if(sort){
      const sortParam = {
        'filter[orderby]': sort.startsWith('-') ? sort.substring(1) : sort,
        'order': sort.startsWith('-') ? 'desc': 'asc'
      }
      params = {...params, ...sortParam}
    }
    return this.httpClient.get(this.createUrl(''), { observe: 'response', params: this.createParams(params) })
      .pipe(switchMap(res => this.getWPQueryResult<PaintingListItemWP>(res)))
  }

  getPaintingById(id: string) {
    const params = { _fields: 'id,title,content,modified,status,categories,tags,painting_categories,data, thumbnailUrl, previousId, nextId' }
    return this.httpClient.get<PaintingWP>(this.createUrl(id), { params: this.createParams(params) })
  }
}
