import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { QueryResultBase, PostWP } from '../types/models';
import { BaseApi } from './base-api.class';
import { baseUrl } from './base-url.class';

@Injectable({
    providedIn: 'root'
})
export class PostApi extends BaseApi {
    constructor(
        httpClient: HttpClient,
        @Inject(baseUrl) protected hostUrl: string,
    ) {
        super(httpClient)
        this.setEndpoint(hostUrl, '/wp/v2/posts')
    }

    getPosts(params?: {_fields?:string, offset?: number; per_page?: number, search?: string,  }) {
        params._fields = 'id,excerpt,title,modified,status,slug,categories'
        return this.httpClient.get(this.createUrl(''), {observe: 'response', params: this.createParams(params)})
            .pipe(switchMap(res=> this.getWPQueryResult<PostWP>(res)))
    }

    getPostById(id: string) {
        const params = {_fields : 'id,title,content,modified,status,categories,tags'}
        return this.httpClient.get<PostWP>(this.createUrl(id),{params: this.createParams(params)})
    }

}