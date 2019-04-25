package com.example.demo.controller;

import com.example.demo.DTO.UserDTO;
import com.example.demo.entities.User;
import com.example.demo.service.UserService;
import com.example.demo.validators.DTOValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/all")
    public List<User> getAllUser(){ return userService.getAllUser();}

    @GetMapping("/one/userId")
    public User getUserById(Integer userId){ return userService.getUserById(userId);}

    @PostMapping("/create")
    public User createUser(@RequestBody @Valid UserDTO userDTO, BindingResult bindingResult){
        DTOValidator.validate(bindingResult);
        return userService.createUser(userDTO);
    }

    @PostMapping("/update/userId")
    public User updateUser(@RequestParam Integer userId, @RequestBody @Valid UserDTO userDTO, BindingResult bindingResult){
        DTOValidator.validate(bindingResult);
        return  userService.updateUser(userId, userDTO);
    }

    @PostMapping("/ban/userId")
    public void banUser(@RequestParam Integer userId){
        userService.banUser(userId);
    }

    @DeleteMapping("/delete/userId")
    public void deleteUser(@RequestParam Integer userId){
        userService.deleteUser(userId);
    }
}
