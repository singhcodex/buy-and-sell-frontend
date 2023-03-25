package com.example.bookstore.controller;

import com.example.bookstore.domain.Book;
import com.example.bookstore.repository.BookRepository;
import com.example.bookstore.service.BookService;
import com.example.bookstore.service.dto.BookDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.*;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {

    @Autowired
    private BookService bookService;



    @GetMapping
    public ResponseEntity<List<BookDto>> getAllBooks(){
        return ResponseEntity.ok(bookService.getAll());
    }

    @PostMapping("/create")
    public ResponseEntity<BookDto> createNewBook(@RequestBody BookDto bookDto){

        BookDto book1 = bookService.create(bookDto);
        return ResponseEntity.created(URI.create("/api/v1/books")).body(book1);
    }


    @GetMapping("/{index}")
    public ResponseEntity<BookDto> getBookByIndex(@PathVariable Long index){
        return ResponseEntity.ok(bookService.getOneById(index));
    }


    @PutMapping
    public ResponseEntity<BookDto> updateBookByIndex(@RequestBody BookDto newBook){
        BookDto update = bookService.update(newBook);
        return ResponseEntity.ok(update);
    }


    @DeleteMapping("/{index}")
    public HttpEntity<?> deleteById(@PathVariable Long index){
        bookService.delete(index);
        return ResponseEntity.EMPTY;
    }


}
