import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import { PostService } from '../../service/post/post.service';
import { Post } from 'src/app/entities/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;
  posts: Object;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.title = "Blog o komputerach"
    this.posts = this.getAllPosts();
  }

  async getAllPosts() {
    const response: Post[] = await this.postService.getAllPost();
    this.posts = response;
  }

}
