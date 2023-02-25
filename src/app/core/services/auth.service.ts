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
declare var FB: any;

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

    this.facebookInit()
    this.currentUserSubject = new BehaviorSubject<User>(null)

    if(this.localStorageService.get('userType') == 'facebooker'){
      const fbUser: User = JSON.parse(this.localStorageService.get('fbUser'))
      this.currentUserSubject.next(fbUser)
    }
    else{

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

  forgot(account: string ,email: string){
    return this.accountApi.forgetPassword({account:account, email: email})
  }

  changePassword(oldPassword: string, newPassword: string){
    return this.accountApi.changePassword({oldPassword: oldPassword, newPassword: newPassword})
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
        this.localStorageService.set('userType', user.UserType)
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

  public loginWithFB(): void {
    FB.login((response) => {
      if (response.authResponse) {
          FB.api("/" + response.authResponse.userID + "?fields=id,name,first_name,last_name,email,picture",  (userData) => {
            if (userData && !userData.error) {
              this.localStorageService.set('token', response.authResponse.accessToken)
              this.localStorageService.set('userType', 'facebooker')


              const userInfo: User = {
                username: userData.name,
                id: userData.id,
                expiredDate: this.jWTTokenService.getExpiryTime(),
                isFacebookUser: true,
                email: userData.email,
                UserType: 'facebooker'
              }
              this.localStorageService.set('fbUser', JSON.stringify(userInfo))
              this.currentUserSubject.next(userInfo)
              location.reload();
            }
          }
        );
      }
      else {
        console.log('User login failed');
      }
    });

  }

  generateUserInfo() {
    const userInfo: User = {
      username: this.jWTTokenService.getUsername(),
      expiredDate: this.jWTTokenService.getExpiryTime(),
      id: this.jWTTokenService.getUserId(),
      student: JSON.parse(this.localStorageService.get('student')),
      isFacebookUser: false,
      UserType: this.localStorageService.get('userType'),
    }
    this.currentUserSubject.next(userInfo)
  }

  generateFacebookUserInfo() {
    const userInfo: User = {
      username: this.jWTTokenService.getUsername(),
      id: this.jWTTokenService.getUserId(),
      expiredDate: this.jWTTokenService.getExpiryTime(),
      isFacebookUser: true
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
    this.localStorageService.remove('userType')
    this.localStorageService.remove('fbUser')
    this.currentUserSubject.next(null)
    window.location.reload();
  }

  public facebookInit() {
    {
      (window as any).fbAsyncInit = function () {
        FB.init({
          appId: '697941055357867',
          cookie: true,
          xfbml: true,
          version: 'v15.0'
        });

        FB.AppEvents.logPageView();

      };

      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }
}
