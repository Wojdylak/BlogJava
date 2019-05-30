import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDTO} from '../../entities/UserDTO';
import {UserService} from '../../service/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'] 
})
export class RegistrationComponent implements OnInit {

  registrationParams: FormGroup;

  nicknameFormControl = new FormControl('', [
    Validators.required
  ]);
  usernameFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  confirmFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.initFormGroup();
  }

  initFormGroup() {
    this.registrationParams = this.formBuilder.group({
      nickname: this.nicknameFormControl,
      username: this.usernameFormControl,
      password: this.passwordFormControl,
      confirmPassword: this.confirmFormControl
    });
  }

  async registrationButtonClicked() {
    const nickname = this.registrationParams.value.nickname;
    const password = this.registrationParams.value.password;
    const email = this.registrationParams.value.username;
    const user: UserDTO = new UserDTO(nickname, email, password);
    await this.registerUser(user).then((response) => {
        if (response != null) {
          this.router.navigateByUrl('/login');
        }
    });
  }

  async registerUser(user: UserDTO) {
    await this.userService.createUser(user).subscribe((myUser) => {
      if (myUser != null) {
        this.router.navigateByUrl('/login');
      } else {
        console.log('ups, bad response');
      }
    });
  }
}
