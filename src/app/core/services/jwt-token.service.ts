import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class JWTTokenService {

  jwtToken: string
  decodedToken: { [key: string]: any }

  constructor() {
  }

  setToken(token: string) {
    if (token) {
      this.jwtToken = token
    }
  }

  decodeToken() {
    if (this.jwtToken) {
      this.decodedToken = this.parseJwt(this.jwtToken)
    }
  }

  getDecodeToken() {
    return this.parseJwt(this.jwtToken)
  }

  getUserId() {
    this.decodeToken()
    return this.decodedToken ? this.decodedToken.userId : null
  }

  getUsername() {
    this.decodeToken()
    return this.decodedToken ? this.decodedToken.username : null
  }

  getExpiryTime() {
    this.decodeToken()
    return this.decodedToken ? this.decodedToken.exp : null
  }

  isTokenExpired(): boolean {
    const now = new Date()
    return now.getTime() > (+this.getExpiryTime() * 1000);
  }

  parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload)
  }
}
