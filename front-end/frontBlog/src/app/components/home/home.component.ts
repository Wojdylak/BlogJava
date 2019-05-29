import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import { PostService } from '../../service/post/post.service';
import { Post } from 'src/app/entities/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.title = 'Blog o komputerach';
    this.getAllPosts();
  }

  async getAllPosts() {
    const response: any = await this.postService.getAllPost().catch((error: HttpErrorResponse) => {console.log(error)});
    this.posts = response;
  }

}
