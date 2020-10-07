import { Injectable, Inject, Optional } from '@angular/core'
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http'
import { AuthService } from './auth.service'
import { catchError } from 'rxjs/operators'
import { Observable, of, throwError } from 'rxjs'
import { LocalStorageService } from './local-storage.service'
@Injectable()

export class AppInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private localStorageService: LocalStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const { url, method, headers, body } = req;
    let token: string
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

    return next.handle(req)
  }


}

