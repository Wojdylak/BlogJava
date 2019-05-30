package com.example.demo.controller;

import com.example.demo.DTO.CommentDTO;
import com.example.demo.entities.Comment;
import com.example.demo.service.CommentService;
import com.example.demo.validators.DTOValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/comment")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @GetMapping("/all")
    public List<Comment> getAllComment(){ return commentService.getAllComment();}

    @GetMapping("/allByPost/{postId}")
    public List<Comment> getAllCommentByPostId(@PathVariable Integer postId){
        return commentService.getAllCommentByPostId(postId);
    }

    @PostMapping("/create")
    public Comment createComment(@RequestBody @Valid CommentDTO commentDTO, BindingResult bindingResult){
        DTOValidator.validate(bindingResult);
        return commentService.createComment(commentDTO);
    }

    @PostMapping("/update/{commentId}")
    public Comment updateComment(@PathVariable Integer commentId, @RequestBody @Valid CommentDTO commentDTO, BindingResult bindingResult){
        DTOValidator.validate(bindingResult);
        return commentService.updateComment(commentId, commentDTO);
    }

    @DeleteMapping("/delete/{commentId}")
    public void deleteComment(@PathVariable Integer commentId){
        commentService.deleteComment(commentId);
    }
}
