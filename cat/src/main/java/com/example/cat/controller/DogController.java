package com.example.cat.controller;

import com.example.cat.domain.Dog;
import com.example.cat.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/dogs")
public class DogController {

    @Autowired
    DogRepository dogRepository;


    @PostMapping("/create")
    public Dog create(@RequestBody Dog dog){
        return dogRepository.save(dog);
    }

    @GetMapping
    public List<Dog> getAllDogs(){
        return dogRepository.findAll();
    }

    @PutMapping
    public Dog updateDogById(@RequestBody Dog dog){
        Optional<Dog> byId = dogRepository.findById(dog.getId());
        if(byId.isPresent()){
            return dogRepository.save(dog);
        }else {
            throw new RuntimeException();
        }
    }


    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id){
        dogRepository.deleteById(id);
    }

}
