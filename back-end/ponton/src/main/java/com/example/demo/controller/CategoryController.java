package com.example.demo.controller;

import com.example.demo.DTO.CategoryDTO;
import com.example.demo.entities.Category;
import com.example.demo.service.CategoryService;
import com.example.demo.validators.DTOValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping("/all")
    public List<Category> getAllCategory(){
        return categoryService.getAllCategory();
    }

    @PostMapping("/create")
    public Category createCategory(@RequestBody @Valid CategoryDTO categoryDTO, BindingResult bindingResult){
        DTOValidator.validate(bindingResult);
        return categoryService.createCategory(categoryDTO);
    }

    @PostMapping("/update/categoryId")
    public Category updateCategory(@RequestParam Integer categoryId, @RequestBody @Valid CategoryDTO categoryDTO, BindingResult bindingResult){
        DTOValidator.validate(bindingResult);
        return categoryService.updateCategory(categoryId, categoryDTO);
    }

    @DeleteMapping("/delete/categoryId")
    public void deleteCategory(@RequestParam Integer categoryId){
        categoryService.deleteCategory(categoryId);
    }
}
