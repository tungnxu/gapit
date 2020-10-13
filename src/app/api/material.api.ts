import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { QueryResultBase, PostWP, MaterialListItemWP } from '../types/models';
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

  getMaterials(params?: { _fields?: string, offset?: number; per_page?: number, search?: string, material_categories?: number}) {
    params._fields = 'id,title,slug,categories,material_categories,data'
    return this.httpClient.get(this.createUrl(''), { observe: 'response', params: this.createParams(params) })
      .pipe(switchMap(res => this.getWPQueryResult<MaterialListItemWP>(res)))
  }

  getPostById(id: string) {
    const params = { _fields: 'id,title,content,modified,status,categories,tags' }
    return this.httpClient.get<PostWP>(this.createUrl(id), { params: this.createParams(params) })
  }

}
