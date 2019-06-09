import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/User';
import { LoginService } from 'src/app/service/login/login.service';
import { UserService } from 'src/app/service/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  username = 'Not logged in';
  role = '';
  isLoggedIn = false;
  users: User[] = [];

  constructor(private loginService: LoginService,
              private userService: UserService,
              private router: Router) {
    this.loginService.getUserCredential().then(() => {
      this.initUser().then(() => {
        if (this.isLoggedIn == false) {
          router.navigateByUrl('/');
        }
        if (this.role != 'ROLE_ADMIN') {
          router.navigateByUrl('/');
        }
      });
    });
               }

  ngOnInit() {
    this.getAllUsers();
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

  async getAllUsers() {
    const response: any = await this.userService.getAllUser().catch((error: HttpErrorResponse) => {console.log(error)});
    this.users = response;
  }

  async setUserButtonClicked(id: Number){
    await this.userService.setRoleUser(id).subscribe((response) => {
      if (response == null){
        this.ngOnInit();
      } else {
        console.log('ups, bad response');
      }
    });
  }

  async setWriterButtonClicked(id: Number){
    await this.userService.setRoleWriter(id).subscribe((response) => {
      if (response == null){
        this.ngOnInit();
      } else {
        console.log('ups, bad response');
      }
    });
  }

  async banButtonClicked(id: Number){
    await this.userService.banUser(id).subscribe((response) => {
      if (response == null){
        this.ngOnInit();
      } else {
        console.log('ups, bad response');
      }
    });
  }

  async unbanButtonClicked(id: Number){
    await this.userService.unbanUser(id).subscribe((response) => {
      if (response == null){
        this.ngOnInit();
      } else {
        console.log('ups, bad response');
      }
    });
  }

  async deleteUserButtonClicked(id: Number){
    await this.userService.deleteUser(id).subscribe((response) => {
      if (response == null){
        this.ngOnInit();
      } else {
        console.log('ups, bad response');
      }
    });
  }

}
