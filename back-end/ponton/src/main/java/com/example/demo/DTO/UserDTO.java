package com.example.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@NoArgsConstructor
@Setter
@Getter
@AllArgsConstructor
public class UserDTO {

    @NotBlank(message = "Nickname can't be blank")
    private String nickname;

    @Email(message = "Email is wrong")
    private String email;

    @NotBlank(message = "Password can't be blank")
    private String password;
}
