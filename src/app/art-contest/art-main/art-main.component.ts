import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/types/models';

@Component({
  selector: 'app-art-main',
  templateUrl: './art-main.component.html',
  styleUrls: ['./art-main.component.scss']
})
export class ArtMainComponent implements OnInit {

  user: User
  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user: User) => {
      this.user = user
      if(!user) {
        this.router.navigate(['cuoc-thi-ve/login'])
      }else{
        user.UserType === 'student' ? this.router.navigate(['cuoc-thi-ve/dang-ky']) : this.router.navigate(['cuoc-thi-ve/dang-ky-gv'])
      }
    })
  }

}
