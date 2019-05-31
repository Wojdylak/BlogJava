import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';
import { UserService } from 'src/app/service/user/user.service';
import { User } from 'src/app/entities/User';
import { HttpErrorResponse } from '@angular/common/http';

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
              private userService: UserService,) { }

  ngOnInit() {
    this.loginService.getIsLoggedOk().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    this.loginService.getRole().subscribe(role => {
      this.role = role;
    });
    this.loginService.getUsername().subscribe(username => {
      this.username = username;
    });

    this.getUser();
  }

  async getUser(){
    const response: any = await this.userService.getOneUserByNickname(this.username).catch((error: HttpErrorResponse) => {console.log(error)});
    this.user = response;
  }
}
