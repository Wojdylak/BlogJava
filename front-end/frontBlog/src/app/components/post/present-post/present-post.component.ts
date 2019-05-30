import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router} from "@angular/router";
import { Post } from 'src/app/entities/Post';
import { PostService } from 'src/app/service/post/post.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommentService } from 'src/app/service/comment/comment.service';
import { LoginService } from 'src/app/service/login/login.service';
import { CommentDTO } from 'src/app/entities/CommentDTO';

@Component({
  selector: 'app-present-post',
  templateUrl: './present-post.component.html',
  styleUrls: ['./present-post.component.scss']
})
export class PresentPostComponent implements OnInit {

  username = 'Not logged in';
  role = '';
  isLoggedIn = false;

  post_id: string;
  isPostLoaded = false;
  post: Post;
  comments: Comment[] = [];

  createCommentParams: FormGroup;

  textFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private activatedRoute: ActivatedRoute,
              private loginService: LoginService,
              private postService: PostService,
              private commentService: CommentService,
              private formBuilder: FormBuilder,
              private router: Router, ) {}

  ngOnInit() {
    this.initFormGroup();
    this.loginService.getIsLoggedOk().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    this.loginService.getRole().subscribe(role => {
      this.role = role;
    });
    this.loginService.getUsername().subscribe(username => {
      this.username = username;
    });
    this.activatedRoute.paramMap.subscribe(params => {
      this.post_id = params.get("id")
    })
    
    this.getOnePost().then(() => this.isPostLoaded = true);
    this.getComments();

  }

  async getOnePost(){
    const response: any = await this.postService.getOnePost(this.post_id).catch((error: HttpErrorResponse) => {console.log(error)});
    this.post = response;
  }

  async getComments(){
    const response: any = await this.commentService.getAllCommentByPostId(this.post_id).catch((error: HttpErrorResponse) => {console.log(error)});
    this.comments = response;
  }

  initFormGroup() {
    this.createCommentParams = this.formBuilder.group({
      text: this.textFormControl,
    });
  }

  async createCommentButtonClicked() {
    const text = this.createCommentParams.value.text;
    const comment: CommentDTO = new CommentDTO(text, this.post.postId);
    await this.createComment(comment).then((response) => {
      if (response != null) {
        this.ngOnInit();
      }
    });
   }

  async createComment(comment: CommentDTO){
    await this.commentService.createComment(comment).subscribe((response) => {
      if (response != null) {
        this.comments.push(response);
      } else {
        console.log('ups, bad response');
      }
    });
  }

  async deleteCommentClicked(id: Number){
    await this.deleteComment(id).then((response) => {
      if (response == null){
        this.ngOnInit();
      }
    });
  }

  async deleteComment(id: Number){
    await this.commentService.deleteComment(id).subscribe((response) =>{
      if (response == null){
        this.getComments();
      } else {
        console.log('ups, bad response');
      }
    });
  }
}
