import { Injectable, Inject, Optional } from '@angular/core'
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse, HttpClient } from '@angular/common/http'
import { AuthService } from './auth.service'
import { catchError, finalize, tap, timeout } from 'rxjs/operators'
import { Observable, of, throwError } from 'rxjs'
import { LocalStorageService } from './local-storage.service'
import { error } from 'selenium-webdriver'
@Injectable()

export class AppInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private localStorageService: LocalStorageService, private _http: HttpClient) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const { url, method, headers, body } = req;
    let token: string

    const startTime = Date.now();
    let status: string;
    let err: string

    if (url.endsWith('Account/RefreshToken') && method === 'POST') {
      token = this.localStorageService.get('refreshToken')
    } else {
      token = this.authService.getJWTToken()
    }
    req = req.clone({
      url: req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })

    return next.handle(req).pipe(
      timeout(3000),
      tap(
        event => {
          status = '';
          if (event instanceof HttpResponse) {
            status = 'succeeded';
          }
        },
        error => {
          status = 'failed'; 
          err = error}
      ),
      finalize(() => {
        const elapsedTime = Date.now() - startTime;
        const message = req.method + " " + req.urlWithParams +" response " + status 
        + " in " + elapsedTime + "ms";
        
        const info = {
          msg: message,
          error: err
        }
        if(req.url.includes('hvn.gapit.com.vn')){
          this.logDetails(info);
        }
      })
  )
  }

  private logDetails(info) {
    // console.log(msg)
    // this._http.post('http://api.webhookinbox.com/i/5KKH8QrZ/in/',{msg: msg}).subscribe()
    fetch("https://api.webhookinbox.com/i/L6XVXIl7/in/", {
      method: "POST", 
      body: JSON.stringify(info)
    }).then(res => {
      // console.log("Request complete! response:", res);
    });
  }
}

