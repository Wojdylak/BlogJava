import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserDTO} from '../../entities/UserDTO';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  createUser(item: UserDTO): Observable<any> {
    return this.http.post<any>(this.URL + '/create', item, { withCredentials: true });
  }
}
