import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { catchError, map, switchMap, tap } from 'rxjs/operators'
import { AccountApi } from 'src/app/api/account.api'
import { StudentApi } from 'src/app/api/student.api'
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
    private jWTTokenService: JWTTokenService,
    private studentApi: StudentApi) {
    this.currentUserSubject = new BehaviorSubject<User>(null)
    this.jWTTokenService.setToken(this.localStorageService.get('token'))
    if (this.jWTTokenService.getUsername()) {
      if (!this.jWTTokenService.isTokenExpired()) {
        this.generateUserInfo()
        // const userInfo: User = {
        //   username: this.jWTTokenService.getUsername(),
        //   id: this.jWTTokenService.getUserId(),
        //   expiredDate: this.jWTTokenService.getExpiryTime()
        // }
        // this.currentUserSubject.next(userInfo)
      } else {
        if (!this.localStorageService.get('refreshToken')) {
          this.logout()
        }
      }

    }

    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value
  }

  getNewToken() {
    if (this.jWTTokenService.jwtToken && this.jWTTokenService.isTokenExpired()) {
      this.accountApi.getRefreshToken().subscribe(data => {
        this.jWTTokenService.setToken(data.token)
        this.generateUserInfo()
        // const userInfo: User = {
        //   username: this.jWTTokenService.getUsername(),
        //   id: this.jWTTokenService.getUserId(),
        //   expiredDate: this.jWTTokenService.getExpiryTime()
        // }
        // this.currentUserSubject.next(userInfo)
        this.localStorageService.set('token', data.token)
        this.localStorageService.remove('refreshToken')
      })
    }
  }

  login(username: string, password: string) {
    const command = {
      username: username,
      password: password
    }
    return this.accountApi.loginAccount(command)
      .pipe(map(user => {
        if (!user) return
        this.jWTTokenService.setToken(user.Token)
        this.localStorageService.set('token', user.Token)
        this.localStorageService.set('refreshToken', user.RefreshToken)
        //TODO
        this.generateUserInfo()
        // const userInfo: User = {
        //   username: this.jWTTokenService.getUsername(),
        //   id: this.jWTTokenService.getUserId(),
        //   expiredDate: this.jWTTokenService.getExpiryTime()
        // }
        // this.currentUserSubject.next(userInfo)
        return user
      }),
        switchMap((user) =>
          this.studentApi.getStudentInfo().pipe(map((studentInfo) => {
            this.localStorageService.set('student', JSON.stringify(studentInfo))
            this.generateUserInfo()
            // if(studentInfo){
            //   this.localStorageService.set('student', studentInfo)
            //   userNew.student = studentInfo
            //   this.currentUserSubject.next(userNew)
            // }
            return user
          }))
        )

      )
  }

  generateUserInfo() {
    const userInfo: User = {
      username: this.jWTTokenService.getUsername(),
      id: this.jWTTokenService.getUserId(),
      expiredDate: this.jWTTokenService.getExpiryTime(),
      student: JSON.parse(this.localStorageService.get('student'))
    }
    this.currentUserSubject.next(userInfo)
  }

  getJWTToken() {
    return this.localStorageService.get('token')
  }

  logout() {
    this.localStorageService.remove('token')
    this.localStorageService.remove('refreshToken')
    this.localStorageService.remove('student')
    this.currentUserSubject.next(null)
    window.location.reload();
  }
}
