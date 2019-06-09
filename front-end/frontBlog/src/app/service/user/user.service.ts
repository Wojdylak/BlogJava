import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserDTO} from '../../entities/UserDTO';
import {Observable} from 'rxjs';
import { User } from 'src/app/entities/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  createUser(item: UserDTO): Observable<any> {
    return this.http.post<any>(this.URL + '/create', item, { withCredentials: true });
  }

  async getAllUser() {
    return await this.http.get<User[]>(this.URL + '/all', {withCredentials: true}).toPromise();
  }

  async getOneUserById(id: string) {
    return await this.http.get<User[]>(this.URL + '/one/' + id, {withCredentials: true}).toPromise();
  }

  async getOneUserByNickname(nickname: string) {
    if (nickname == null || nickname == '')
      return;
    return await this.http.get<User[]>(this.URL + '/oneNickname/' + nickname, {withCredentials: true}).toPromise();
  }

  setRoleUser(id: Number){
    return this.http.post<User>(this.URL + '/setRoleUser/' + id, {withCredentials: true});
  }

  setRoleWriter(id: Number){
    return this.http.post<User>(this.URL + '/setRoleWriter/' + id, {withCredentials: true});
  }

  banUser(id: Number){
    return this.http.post<User>(this.URL + '/ban/' + id, {withCredentials: true});
  }

  unbanUser(id: Number){
    return this.http.post<User>(this.URL + '/unban/' + id, {withCredentials: true});
  }

  updateUser(id: Number, item: UserDTO){
    return this.http.post<User>(this.URL + '/update/' + id, item, {withCredentials: true});
  }

  updateUserEmail(id: Number, item: String){
    return this.http.post<User>(this.URL + '/updateEmail/' + id, item, {withCredentials: true});
  }

  updateUserPassword(id: Number, item: String){
    return this.http.post<User>(this.URL + '/updatePassword/' + id, item, {withCredentials: true});
  }

  deleteUser(id: Number){
    return this.http.delete<User>(this.URL + '/delete/' + id, {withCredentials: true});
  }
}
