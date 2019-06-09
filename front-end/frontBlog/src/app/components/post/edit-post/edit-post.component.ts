import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Category } from 'src/app/entities/Category';
import { Post } from 'src/app/entities/Post';
import { LoginService } from 'src/app/service/login/login.service';
import { PostService } from 'src/app/service/post/post.service';
import { CategoryService } from 'src/app/service/category/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { PostDTO } from 'src/app/entities/PostDTO';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  username = 'Not logged in';
  role = '';
  isLoggedIn = false;
  post_id;
  isPostLoaded = false;
  post: Post;
  categories: Category[] = [];

  updatePostParams: FormGroup;

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
              private router: Router,
              private activatedRoute: ActivatedRoute) { 
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
    this.activatedRoute.paramMap.subscribe(params => {
      this.post_id = params.get("id")
    })

    this.getPost().then(() => this.isPostLoaded = true);
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
    this.updatePostParams = this.formBuilder.group({
      title: this.titleFormControl,
      category: this.categoryFormControl,
      text: this.textFormControl,
    })
  }

  async getAllCategory(){
    const response: any = await this.categoryService.getAllCategory().catch((error: HttpErrorResponse) => {console.log(error)});
    this.categories = response;
  }

  async getPost(){
    const response: any = await this.postService.getOnePost(this.post_id).catch((error: HttpErrorResponse) => {console.log(error)});
    this.post = response;
  }

  async updatePostButtonClicked(){
    const title = this.updatePostParams.value.title;
    const category = this.updatePostParams.value.category;
    const text = this.updatePostParams.value.text;
    const post: PostDTO = new PostDTO(category, text, title);
    await this.updatePost(post).then((response) => {
      if (response != null){
        console.log('ups, bad response');
      }
    })
  }

  async updatePost(post: PostDTO){
    await this.postService.updatePost(this.post_id, post).subscribe((response) => {
      if (response != null) {
        this.router.navigate(['/post', response.postId]);
      } else {
        console.log('ups, bad response');
      }
    })
  }
}
