import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/models';
import { BaseApi } from './base-api.class';
import { apiUrl } from './base-url.class';

@Injectable({
  providedIn: 'root'
})
export class LocationApi extends BaseApi {
  constructor(
    httpClient: HttpClient,
    @Inject(apiUrl) protected hostUrl: string,
  ) {
    super(httpClient)
    this.setEndpoint(hostUrl, '/Location')
  }

  getProvincesSchool() {
    return this.httpClient.get<any>(this.createUrl('SchoolProvinces'), null)
  }

  getDistrictSchool(provinceId: number) {
    return this.httpClient.get<any>(this.createUrl('SchoolProvinces/${provinceId}'), null)
  }

  getProvinces() {
    return this.httpClient.get<any>(this.createUrl('Provinces'), null)
  }

  getDistrict(provinceId: number) {
    return this.httpClient.get<any>(this.createUrl(`Provinces/${provinceId}`), null)
  }
}
