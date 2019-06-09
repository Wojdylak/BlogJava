import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';
import { PostService } from 'src/app/service/post/post.service';
import { Post } from 'src/app/entities/Post';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit {

  username = 'Not logged in';
  role = '';
  isLoggedIn = false;
  posts: Post[] = [];

  constructor(private loginService: LoginService,
              private postService: PostService,
              private router: Router,) {
    this.loginService.getUserCredential().then(() => {
      this.initUser().then(() => {
        if (this.isLoggedIn == false) {
          router.navigateByUrl('/');
        }
        if (this.role != 'ROLE_ADMIN') {
          router.navigateByUrl('/');
        }
      });
    });
               }

  ngOnInit() {
    this.getAllPosts();
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

  async getAllPosts() {
    const response: any = await this.postService.getAllPost().catch((error: HttpErrorResponse) => {console.log(error)});
    this.posts = response;
  }

  async deletePostButtonClicked(id: Number){
    await this.postService.deletePost(id).subscribe((response) => {
      if (response == null){
        this.ngOnInit();
      } else {
        console.log('ups, bad response');
      }
    });
  }

}
