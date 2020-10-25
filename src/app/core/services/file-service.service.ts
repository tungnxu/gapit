import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FileService {

  constructor(private http: HttpClient) {}

  downloadFile(url): Observable<Blob> {
		return this.http.get(url, {responseType: 'blob'});
  }
   
}