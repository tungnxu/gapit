import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/models';
import { BaseApi } from './base-api.class';
import { apiUrl } from './base-url.class';

@Injectable({
  providedIn: 'root'
})
export class AccountApi extends BaseApi {
  constructor(
    httpClient: HttpClient,
    @Inject(apiUrl) protected hostUrl: string,
  ) {
    super(httpClient)
    this.setEndpoint(hostUrl, '/Account')
  }

  registerAccount(command: {
    username: string;
    password: string;
  }) {
    return this.httpClient.post<any>(this.createUrl('SignUp'), command)
  }

  loginAccount(command: {
    username: string;
    password: string;
  }): Observable<User> {
    return this.httpClient.post<any>(this.createUrl('Token'), command)
  }

  getRefreshToken(){
    return this.httpClient.post<any>(this.createUrl('RefreshToken'), null)
  }
}
