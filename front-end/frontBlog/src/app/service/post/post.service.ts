import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/entities/Post';
import { PostDTO } from 'src/app/entities/PostDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  URL = 'http://localhost:8080/post';

  constructor(private http: HttpClient) { }

  async getAllPost() {
    return await this.http.get<Post[]>(this.URL + '/all', {withCredentials: true}).toPromise();
  }

  async getOnePost(post_id: string){
    return await this.http.get<Post>(this.URL + '/one/' + post_id, {withCredentials: true}).toPromise();
  }

  async getAllPostByCategory(category_id: string){
    return await this.http.get<Post>(this.URL + '/allByCategory/' + category_id, {withCredentials: true}).toPromise();
  }

  async getAllPostByUserNickname(nickname: String){
    return await this.http.get<Post>(this.URL + '/allByNickname/' + nickname, {withCredentials: true}).toPromise();
  }

  createPost(item: PostDTO): Observable<any> {
    return this.http.post<Post>(this.URL + '/create', item, {withCredentials: true});
  }

  updatePost(id: Number, item: PostDTO): Observable<any> {
    return this.http.post<Post>(this.URL + '/update/' + id, item, {withCredentials: true});
  }

  deletePost(id: Number): Observable<any> {
    return this.http.delete<Post>(this.URL + '/delete/' + id, {withCredentials: true});
  }
}
