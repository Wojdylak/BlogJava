import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Category } from 'src/app/entities/Category';
import { PostService } from 'src/app/service/post/post.service';
import { CategoryService } from 'src/app/service/category/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from 'src/app/service/login/login.service';
import { PostDTO } from 'src/app/entities/PostDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  username = 'Not logged in';
  role = '';
  isLoggedIn = false;
  categories: Category[] = [];

  createPostParams: FormGroup;

  titleFormControl = new FormControl('', [
    Validators.required
  ]);
  categoryFormControl = new FormControl('', [
    Validators.required
  ]);
  textFormControl = new FormControl('', [
    Validators.required
  ]);
  


  constructor(private loginService: LoginService,
              private postService: PostService,
              private categoryService: CategoryService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.loginService.getUserCredential().then(() => {
      this.initUser().then(() => {
        if (this.isLoggedIn == false) {
          router.navigateByUrl('/');
        }
        if (this.role != 'ROLE_WRITER') {
          router.navigateByUrl('/');
        }
      });
    });
               }

  ngOnInit() {
    this.initFormGroup();
    this.getAllCategory();
  }

  async initUser(){
    await this.loginService.getIsLoggedOk().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    await this.loginService.getRole().subscribe(role => {
      this.role = role;
    });
    await this.loginService.getUsername().subscribe(username => {
      this.username = username;
    });
  }

  initFormGroup(){
    this.createPostParams = this.formBuilder.group({
      title: this.titleFormControl,
      category: this.categoryFormControl,
      text: this.textFormControl,
    })
  }

  async getAllCategory(){
    const response: any = await this.categoryService.getAllCategory().catch((error: HttpErrorResponse) => {console.log(error)});
    this.categories = response;
  }

  async createPostButtonClicked(){
    const title = this.createPostParams.value.title;
    const category = this.createPostParams.value.category;
    const text = this.createPostParams.value.text;
    const post: PostDTO = new PostDTO(category, text, title);
    await this.createPost(post).then((response) => {
      if (response != null){
        console.log('ups, bad response');
      }
    })
  }

  async createPost(post: PostDTO){
    await this.postService.createPost(post).subscribe((response) => {
      if (response != null) {
        this.router.navigate(['/post', response.postId]);
      } else {
        console.log('ups, bad response');
      }
    })
  }
}
