package com.example.demo.service;

import com.example.demo.DTO.PostDTO;
import com.example.demo.entities.Category;
import com.example.demo.entities.Post;
import com.example.demo.entities.User;
import com.example.demo.exceptions.EntityNotFoundException;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.PostRepository;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PostService {

    private final PostRepository postRepository;
    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;
    private final UserService userService;

    public List<Post> getAllPosts(){
        return postRepository.findAll();
    }

    public List<Post> getAllPostsByCategoryId(Integer categoryId){
        Category category = categoryRepository.findById(categoryId).orElseThrow(()-> new EntityNotFoundException("category"));
        return postRepository.findAllByCategoryIn(category);
    }

    public List<Post> getAllPostsByUserNickname(String nickname){
        User user = userRepository.findAllByNicknameIn(nickname);
        return postRepository.findAllByUserIn(user);
    }

    public Post getPostById(Integer postId){
        return postRepository.findById(postId).orElseThrow(()-> new EntityNotFoundException("post"));
    }

    public Post createPost(PostDTO postDTO){
        Post post = new Post();
        post.setUser(userService.getLoggedInUser());
        return postRepository.save(castPostDTOToPost(post, postDTO));
    }

    public Post updatePost(Integer postId, PostDTO postDTO){
        Post post = postRepository.findById(postId).orElseThrow(()-> new EntityNotFoundException("post"));
        return postRepository.save(castPostDTOToPost(post, postDTO));

    }

    public void deletePost(Integer postId){
        Post post = postRepository.findById(postId).orElseThrow(()-> new EntityNotFoundException("post"));
        postRepository.delete(post);
    }

    private Post castPostDTOToPost(Post post, PostDTO postDTO){
        post.setTitle(postDTO.getTitle());
        post.setText(postDTO.getText());
        Category category = categoryRepository.findById(postDTO.getCategoryId()).orElseThrow(()-> new EntityNotFoundException("category"));
        post.setCategory(category);
        return post;
    }
}
