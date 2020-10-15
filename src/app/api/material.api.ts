import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { QueryResultBase, PostWP, MaterialListItemWP, MaterialWP } from '../types/models';
import { BaseApi } from './base-api.class';
import { cmsUrl } from './base-url.class';

@Injectable({
  providedIn: 'root'
})
export class MaterialApi extends BaseApi {
  constructor(
    httpClient: HttpClient,
    @Inject(cmsUrl) protected hostUrl: string,
  ) {
    super(httpClient)
    this.setEndpoint(hostUrl, '/wp/v2/materials')
  }

  getMaterials(params?: { _fields?: string, offset?: number; per_page?: number, search?: string, material_categories?: number }, sort?: string) {
    params._fields = 'id,title,slug,categories,material_categories,data,thumbnailUrl,likeCount,featured_media,date'
    if(sort){
      const sortParam = {
        'filter[orderby]': sort,
        'order': sort.startsWith('-') ? 'desc': 'asc'
      }
      params = {...params, ...sortParam}
    }
    return this.httpClient.get(this.createUrl(''), { observe: 'response', params: this.createParams(params) })
      .pipe(switchMap(res => this.getWPQueryResult<MaterialListItemWP>(res)))
  }

  getMaterialById(id: string) {
    const params = { _fields: 'id,title,content,modified,status,categories,tags,material_categories,data, thumbnailUrl' }
    return this.httpClient.get<MaterialWP>(this.createUrl(id), { params: this.createParams(params) })
  }

}
