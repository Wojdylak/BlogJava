package com.example.demo.service;

import com.example.demo.DTO.CommentDTO;
import com.example.demo.entities.Comment;
import com.example.demo.entities.Post;
import com.example.demo.exceptions.EntityNotFoundException;
import com.example.demo.repository.CommentRepository;
import com.example.demo.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final PostRepository postRepository;
    private final UserService userService;

    public List<Comment> getAllComment(){
        return commentRepository.findAll();
    }

    public List<Comment> getAllCommentByPostId(Integer postId){
        Post post = postRepository.findById(postId).orElseThrow(()-> new EntityNotFoundException("post"));
        return commentRepository.findAllByPostIn(post);
    }

    public Comment createComment(CommentDTO commentDTO){
        Post post = postRepository.findById(commentDTO.getPostId()).orElseThrow(()-> new EntityNotFoundException("post"));
        Comment comment = new Comment();
        comment.setUser(userService.getLoggedInUser());
        comment.setPost(post);
        return commentRepository.save(castCommentDTOToComment(comment, commentDTO));
    }

    public Comment updateComment(Integer commentId, CommentDTO commentDTO){
        Comment comment = commentRepository.findById(commentId).orElseThrow(()-> new EntityNotFoundException("comment"));
        return commentRepository.save(castCommentDTOToComment(comment, commentDTO));
    }

    public void deleteComment(Integer commentId){
        Comment comment = commentRepository.findById(commentId).orElseThrow(()-> new EntityNotFoundException("comment"));
        commentRepository.delete(comment);
    }

    private Comment castCommentDTOToComment(Comment comment, CommentDTO commentDTO){
        comment.setText(commentDTO.getText());
        return comment;
    }
}
