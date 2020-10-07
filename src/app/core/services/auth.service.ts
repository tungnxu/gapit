import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { AccountApi } from 'src/app/api/account.api'
import { User } from 'src/app/types/models'
import { environment } from 'src/environments/environment'
import { JWTTokenService } from './jwt-token.service'
import { LocalStorageService } from './local-storage.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>

  constructor(
    private accountApi: AccountApi,
    private localStorageService: LocalStorageService,
    private jWTTokenService: JWTTokenService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value
  }

  login(username: string, password: string) {
    const command = {
      username: username,
      password: password
    }
    return this.accountApi.loginAccount(command)
      .pipe(map(user => {
        this.jWTTokenService.setToken(user.token)
        this.localStorageService.set('token', user.token)
        this.localStorageService.set('refreshToken', user.refreshToken)
        localStorage.setItem('currentUser', this.jWTTokenService.getUser())
        //TODO
        debugger
        this.currentUserSubject.next(user)
        return user
      }))
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser')
    this.currentUserSubject.next(null)
  }
}
