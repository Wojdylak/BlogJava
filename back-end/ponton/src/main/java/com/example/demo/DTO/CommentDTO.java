package com.example.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@Setter
@Getter
@AllArgsConstructor
public class CommentDTO {

    @Length(max = 10000, message = "Text can't be long")
    @NotBlank(message = "Text can't be blank")
    private String text;

    @NotNull(message = "Post id can't be null")
    private Integer postId;
}
