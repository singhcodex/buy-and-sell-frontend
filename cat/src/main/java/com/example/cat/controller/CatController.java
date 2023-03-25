package com.example.cat.controller;

import com.example.cat.domain.Cat;
import com.example.cat.repository.CatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/cats")
public class CatController {

    @Autowired
    CatRepository catRepository;

    @PostMapping("/create")
    public Cat create(@RequestBody Cat cat){
        return catRepository.save(cat);
    }


    @GetMapping
    public List<Cat> getAllCat(){
        return catRepository.findAll();

    }


    @PutMapping
    public Cat updateCat(@RequestBody Cat cat){
        Optional<Cat> byId = catRepository.findById(cat.getId());
        if(byId.isPresent()){
            Cat save = catRepository.save(cat);
            return save;
        }else{
            throw new RuntimeException("no data changes");
        }
    }


    @DeleteMapping("/{index}")
    public void deleteCat(@RequestBody Cat cat, @PathVariable Long index){
        catRepository.deleteById(index);
    }


}
