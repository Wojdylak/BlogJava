import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/entities/Post';
import { LoginService } from 'src/app/service/login/login.service';
import { PostService } from 'src/app/service/post/post.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/service/user/user.service';
import { User } from 'src/app/entities/User';

@Component({
  selector: 'app-all-user-post',
  templateUrl: './all-user-post.component.html',
  styleUrls: ['./all-user-post.component.scss']
})
export class AllUserPostComponent implements OnInit {

  username = 'Not logged in';
  role = '';
  isLoggedIn = false;
  posts: Post[] = [];

  constructor(private loginService: LoginService,
              private postService: PostService,
              private userService: UserService,
              private router: Router,) {
    this.loginService.getUserCredential().then(() => {
      this.initUser().then(() => {
        if (this.isLoggedIn == false) {
          router.navigateByUrl('/');
        }
        if (this.role != 'ROLE_WRITER') {
          router.navigateByUrl('/');
        }
        this.getAllPosts();
      });
    });
               }

  ngOnInit() {
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
    const response: any = await this.postService.getAllPostByUserNickname(this.username).catch((error: HttpErrorResponse) => {console.log(error)});
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
