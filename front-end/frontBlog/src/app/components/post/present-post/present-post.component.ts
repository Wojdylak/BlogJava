import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { Post } from 'src/app/entities/Post';
import { PostService } from 'src/app/service/post/post.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-present-post',
  templateUrl: './present-post.component.html',
  styleUrls: ['./present-post.component.scss']
})
export class PresentPostComponent implements OnInit {

  post_id: string;
  post: Post;

  constructor(private route: ActivatedRoute,
              private postService: PostService,) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.post_id = params.get("id")
    })
    
    this.getOnePost();
    // console.log(this.post);
  }

  async getOnePost(){
    const response: any = await this.postService.getOnePost(this.post_id).catch((error: HttpErrorResponse) => {console.log(error)});
    this.post = response;
  }

}
