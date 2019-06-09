import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';
import { UserService } from 'src/app/service/user/user.service';
import { User } from 'src/app/entities/User';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-present-account',
  templateUrl: './present-account.component.html',
  styleUrls: ['./present-account.component.scss']
})
export class PresentAccountComponent implements OnInit {

  username = 'Not logged in';
  role = '';
  isLoggedIn = false;
  user: User;

  constructor(private loginService: LoginService,
              private userService: UserService,
              private router: Router) {
    this.loginService.getUserCredential().then(() => {
      this.initUser().then(() => {
        if (this.isLoggedIn == false) {
          router.navigateByUrl('/');
        }
        this.getUser();
      });
    });
               }

  ngOnInit() {    
  }

  async initUser(){
    await this.loginService.getIsLoggedOk().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    await this.loginService.getRole().subscribe(role => {
      this.role = role;
    });
    await this.loginService.getUsername().subscribe(username => {
      this.username = username;
    });
  }

  async getUser(){
    const response: any = await this.userService.getOneUserByNickname(this.username).catch((error: HttpErrorResponse) => {console.log(error)});
    this.user = response;
  }

  async deleteButtonClicked(){
    await this.userService.banUser(this.user.userId).subscribe((response) => {
      if (response == null){
        this.loginService.logoutUser().then(() => {
          this.router.navigateByUrl('/');
        });
      } else {
        console.log('ups, bad response');
      }
    });
  }


}
