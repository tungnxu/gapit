import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student, StudentInfo, StudentRegistrationInfo, User } from '../types/models';
import { BaseApi } from './base-api.class';
import { apiUrl } from './base-url.class';

@Injectable({
  providedIn: 'root'
})
export class StudentApi extends BaseApi {
  constructor(
    httpClient: HttpClient,
    @Inject(apiUrl) protected hostUrl: string,
  ) {
    super(httpClient)
    this.setEndpoint(hostUrl, '/Student')
  }

  studentRegister(command: StudentRegistrationInfo) {
    return this.httpClient.post<any>(this.createUrl('RegisterForm'), command)
  }

  getStudentInfo():Observable<Student> {
    return this.httpClient.get<Student>(this.createUrl('Info'))
  }

  uploadExam(formData:FormData):Observable<any>{
    return this.httpClient.post(this.createUrl('UploadExam'),formData)
  }
}
