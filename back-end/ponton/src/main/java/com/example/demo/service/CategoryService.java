package com.example.demo.service;

import com.example.demo.DTO.CategoryDTO;
import com.example.demo.entities.Category;
import com.example.demo.exceptions.EntityNotFoundException;
import com.example.demo.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public List<Category> getAllCategory(){
        return categoryRepository.findAll();
    }

    public Category createCategory(CategoryDTO categoryDTO){
        Category category = new Category();
        return categoryRepository.save(castCategoryDTOToCategory(category, categoryDTO));
    }

    public Category updateCategory(Integer categoryId, CategoryDTO categoryDTO){
        Category category = categoryRepository.findById(categoryId).orElseThrow(()-> new EntityNotFoundException("category"));
        return categoryRepository.save(castCategoryDTOToCategory(category, categoryDTO));
    }

    public void deleteCategory(Integer categoryId){
        Category category = categoryRepository.findById(categoryId).orElseThrow(()-> new EntityNotFoundException("category"));
        category.setName("None");
        categoryRepository.save(category);
    }

    private Category castCategoryDTOToCategory(Category category, CategoryDTO categoryDTO){
        category.setName(categoryDTO.getName());
        return category;
    }
}
