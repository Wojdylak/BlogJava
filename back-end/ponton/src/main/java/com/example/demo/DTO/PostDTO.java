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
public class PostDTO {

    @Length(max = 10000, message = "Text can't be long")
    @NotBlank(message = "Text can't be blank")
    private String text;

    @NotBlank(message = "Title can't be blank")
    private String title;

    @NotNull(message = "Category can't be null")
    private Integer categoryId;
}
