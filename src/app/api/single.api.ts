import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultExam } from '../types/models';
import { BaseApi } from './base-api.class';
import { apiUrl } from './base-url.class';

@Injectable({
  providedIn: 'root'
})
export class SingleApi extends BaseApi {
  constructor(
    httpClient: HttpClient,
    @Inject(apiUrl) protected hostUrl: string,
  ) {
    super(httpClient)
    this.setEndpoint(hostUrl, '/Result')
  }
  getResultInfo(id):Observable<ResultExam> {
    return this.httpClient.get<ResultExam>(this.createUrl(`Search/${id}`))
  }
 
}
