import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { QueryResultBase, CategoryWP } from '../types/models';
import { BaseApi } from './base-api.class';
import { baseUrl } from './base-url.class';

@Injectable({
    providedIn: 'root'
})
export class CategoryApi extends BaseApi {
    constructor(
        httpClient: HttpClient,
        @Inject(baseUrl) protected hostUrl: string,
    ) {
        super(httpClient)
        this.setEndpoint(hostUrl, '/wp/v2/categories')
    }

    queryCategories(params?: {_fields?:string, offset?: number; per_page?: number, search?: string}) {
        params._fields = 'id,name,slug,description,parent'
        return this.httpClient.get(this.createUrl(''), {observe: 'response', params: this.createParams(params)})
            .pipe(switchMap(res=> this.getWPQueryResult<CategoryWP>(res)))
    }

    getAllCategories() {
        const params = {_fields: 'id,name,slug,description,parent'}
        return this.httpClient.get<CategoryWP[]>(this.createUrl(''), { params: this.createParams(params)})
    }
}