import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {UserPrincipal} from '../../entities/UserPrincipal';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL = 'http://localhost:8080';

  constructor(private http: HttpClient,
              private router: Router) {
    this.getUserCredential().then(() => this.isLoggedInCorrectly());
  }

  private loggedIn: BehaviorSubject<any> = new BehaviorSubject([]);
  private role: BehaviorSubject<any> = new BehaviorSubject([]);
  private username: BehaviorSubject<any> = new BehaviorSubject([]);


  getIsLoggedOk() {
    return this.loggedIn.asObservable();
  }

  getRole() {
    return this.role.asObservable();
  }

  getUsername() {
    return this.username.asObservable();
  }

  isLoggedInCorrectly() {
    return this.loggedIn.getValue();
  }

  async loginUser(username: string, password: string) {
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('password', password);
    let isStatusOk = true;
    await this.http.post<any>(this.URL + '/login', body, {withCredentials: true}).toPromise().catch((e: HttpErrorResponse) => {
      isStatusOk = false;
    });
    if (isStatusOk === true) {
      this.loggedIn.next(true);
    }
    this.getUserCredential();
    return isStatusOk;
  }

  async getUserCredential() {
    const principal = await this.http.get<UserPrincipal>(this.URL + '/user/getUser', {withCredentials: true}).toPromise();
    if (principal != null) {
      this.role.next(principal.role);
      this.username.next('Logged as: ' + principal.username);
      this.loggedIn.next(true);
    } else {
      this.role.next('null');
      this.username.next('Not logged in');
      this.loggedIn.next(false);
    }
  }

  async logoutUser() {
    let isStatusOk = true;
    await this.http.post<any>(this.URL + '/logout', null, {withCredentials: true}).toPromise().catch((e: HttpErrorResponse) => {
      isStatusOk = false;
    });
    if (isStatusOk === true) {
      this.loggedIn.next(false);
      this.role.next('null');
      this.username.next('Not logged in');
      this.router.navigateByUrl('login');
    }
    this.getUserCredential();
  }
}
