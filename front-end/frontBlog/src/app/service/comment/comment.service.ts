import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentDTO } from 'src/app/entities/CommentDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  URL = 'http://localhost:8080/comment';

  constructor(private http: HttpClient) { }

  async getAllComment() {
    return await this.http.get<Comment>(this.URL + '/all', {withCredentials: true}).toPromise();
  }

  async getAllCommentByPostId(post_id: string){
    return await this.http.get<Comment>(this.URL + '/allByPost/' + post_id, {withCredentials: true}).toPromise();
  }

  createComment(item: CommentDTO): Observable<any> {
    return this.http.post<Comment>(this.URL + '/create', item, {withCredentials: true});
  }

  updateComment(id: number, item: CommentDTO){
    return this.http.post<Comment>(this.URL + '/update/' + id, item, {withCredentials: true});
  }

  deleteComment(id: number){
    return this.http.delete<Comment>(this.URL + '/delete/' + id, {withCredentials: true});
  }

}
