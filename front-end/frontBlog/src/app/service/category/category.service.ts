import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/entities/Category';
import { CategoryDTO } from 'src/app/entities/CategoryDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  URL = 'http://localhost:8080/category';

  constructor(private http: HttpClient) { }

  async getAllCategory() {
    return await this.http.get<Category>(this.URL + '/all', {withCredentials: true}).toPromise();
  }

  createCategory(item: CategoryDTO): Observable<any> {
    return this.http.post<Category>(this.URL + '/create', item, {withCredentials: true});
  }

  updateCategory(id: number, item: CategoryDTO){
    return this.http.post<Category>(this.URL + '/update/' + id, item, {withCredentials: true});
  }

  deleteCategory(id: number){
    return this.http.delete<Category>(this.URL + '/delete/' + id, {withCredentials: true});
  }

}
