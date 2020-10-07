import { Injectable, Inject, Optional } from '@angular/core'
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http'
@Injectable()

export class AppInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest, next: HttpHandler) {
    const token = this.authService.getJWTToken()
    req = req.clone({
      url: req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(req)
  }
}
