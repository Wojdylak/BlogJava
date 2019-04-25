import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

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
    this.posts = this.postService.getPosts();
  }

}
