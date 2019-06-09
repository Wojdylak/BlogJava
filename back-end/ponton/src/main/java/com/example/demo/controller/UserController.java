package com.example.demo.controller;

import com.example.demo.DTO.UserDTO;
import com.example.demo.DTO.UserPrincipal;
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

    @GetMapping("/getUser")
    public UserPrincipal getPrincipal() {
        return userService.getUserPrincipal();
    }

    @GetMapping("/all")
    public List<User> getAllUser(){ return userService.getAllUser();}

    @GetMapping("/one/{userId}")
    public User getUserById(@PathVariable Integer userId){ return userService.getUserById(userId);}

    @GetMapping("/oneNickname/{nickname}")
    public User getUserByNickname(@PathVariable String nickname){return userService.getUserByNickname(nickname);}

    @PostMapping("/create")
    public User createUser(@RequestBody @Valid UserDTO userDTO, BindingResult bindingResult){
        DTOValidator.validate(bindingResult);
        return userService.createUser(userDTO);
    }

    @PostMapping("/update/{userId}")
    public User updateUser(@PathVariable Integer userId, @RequestBody @Valid UserDTO userDTO, BindingResult bindingResult){
        DTOValidator.validate(bindingResult);
        return  userService.updateUser(userId, userDTO);
    }

    @PostMapping("/setRoleWriter/{userId}")
    public void setRoleWriter(@PathVariable Integer userId){
        userService.setRoleWriter(userId);
    }

    @PostMapping("/setRoleUser/{userId}")
    public void setRoleUser(@PathVariable Integer userId){
        userService.setRoleUser(userId);
    }

    @PostMapping("/updateEmail/{userId}")
    public User updateUserEmail(@PathVariable Integer userId, @RequestParam String email){
        return  userService.updateUserEmail(userId, email);
    }

    @PostMapping("/updatePassword/{userId}")
    public User updateUserPassword(@PathVariable Integer userId, @RequestParam String password){
        return  userService.updateUserPassword(userId, password);
    }

    @PostMapping("/ban/{userId}")
    public void banUser(@PathVariable Integer userId){
        userService.banUser(userId);
    }

    @PostMapping("/unban/{userId}")
    public void unbanUser(@PathVariable Integer userId){
        userService.unbanUser(userId);
    }

    @DeleteMapping("/delete/{userId}")
    public void deleteUser(@PathVariable Integer userId){
        userService.deleteUser(userId);
    }
}
