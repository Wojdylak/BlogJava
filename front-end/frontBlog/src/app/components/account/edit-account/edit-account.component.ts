import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/User';
import { LoginService } from 'src/app/service/login/login.service';
import { UserService } from 'src/app/service/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/entities/UserDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {

  username = 'Not logged in';
  role = '';
  isLoggedIn = false;
  user: User;

  emailParams: FormGroup;
  passwordParams: FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  confirmFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private loginService: LoginService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router,) { }

  ngOnInit() {
    this.initFormGroup();
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

  initFormGroup(){
    this.emailParams = this.formBuilder.group({
      email: this.emailFormControl,
    });
    this.passwordParams = this.formBuilder.group({
      password: this.passwordFormControl,
      confirmPassword: this.confirmFormControl,
    });
  }

  async getUser(){
    const response: any = await this.userService.getOneUserByNickname(this.username).catch((error: HttpErrorResponse) => {console.log(error)});
    this.user = response;
  }

  async emailChangeButtonClicked(){
    const email = this.emailParams.value.email;
    
  }


  async updateUser(user: UserDTO){
    await this.userService.updateUser(this.user.userId, user).subscribe((response) => {
      if (response != null){
        this.router.navigateByUrl('/account');
      } else {
        console.log('ups, bad response');
      }
    })
  }

}
