package com.example.demo.controller;

import com.example.demo.DTO.PostDTO;
import com.example.demo.entities.Post;
import com.example.demo.service.PostService;
import com.example.demo.validators.DTOValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/post")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @GetMapping("/all")
    public List<Post> getAllPosts(){
        return postService.getAllPosts();
    }

    @GetMapping("/allByCategory/categoryId")
    public List<Post> getAllPostsByCategoryId(@RequestParam Integer categoryId){
        return postService.getAllPostsByCategoryId(categoryId);
    }

    @GetMapping("/one/postId")
    public Post getPostById(@RequestParam Integer postId){
        return postService.getPostById(postId);
    }

    @PostMapping("/create")
    public Post createPost(@RequestBody @Valid PostDTO postDTO, BindingResult bindingResult){
        DTOValidator.validate(bindingResult);
        return postService.createPost(postDTO);
    }

    @PostMapping("/update/postId")
    public Post updatePost(@RequestParam Integer postId, @RequestBody @Valid PostDTO postDTO, BindingResult bindingResult){
        DTOValidator.validate(bindingResult);
        return postService.updatePost(postId, postDTO);
    }

    @DeleteMapping("/delete/postId")
    public void deletePost(@RequestParam Integer postId){
        postService.deletePost(postId);
    }
}
