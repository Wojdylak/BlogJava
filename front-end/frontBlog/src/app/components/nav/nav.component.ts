import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'MyBlog';
  isLogged: boolean = false;


  username = 'Not logged in';
  role = '';
  isLoggedIn = false;

  constructor(private router: Router,
              private loginService: LoginService) { }

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
  }

  logoutButtonClicked() {
    this.loginService.logoutUser().then(() => {
      this.router.navigateByUrl('/');
    });
  }
}
