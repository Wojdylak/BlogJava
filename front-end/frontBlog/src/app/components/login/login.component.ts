import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../service/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedOk = true;

  loginParams: FormGroup;
  usernameFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.initFormGroup();
  }

  initFormGroup() {
    this.loginParams = this.formBuilder.group({
      username: this.usernameFormControl,
      password: this.passwordFormControl
    });
  }

  async  loginButtonClicked() {
    const username = this.loginParams.value.username;
    const password = this.loginParams.value.password;
    const isStatusOk = await this.loginService.loginUser(username, password);
    if (isStatusOk === true) {
      this.router.navigateByUrl('/');
    } else {
      this.isLoggedOk = false;
    }
  }
}
