package com.example.bookstore.service;

import com.example.bookstore.domain.Book;
import com.example.bookstore.repository.BookRepository;
import com.example.bookstore.service.dto.BookDto;
import com.example.bookstore.service.mapper.BookMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {



    @Autowired
    BookRepository bookRepository;


    @Autowired
    BookMapper bookMapper;


    public BookDto create(BookDto bookDto){
        Book book = bookMapper.toBook(bookDto);
        Book save = bookRepository.save(book);
        return bookMapper.toDto(save);
    }

    public List<BookDto> getAll(){
        List<Book> all = bookRepository.findAll();
        return bookMapper.toDtoList(all);
    }

    public BookDto getOneById(Long id){
        Optional<Book> byId = bookRepository.findById(id);
        if(byId.isPresent()){
            Book book = byId.get();
            return bookMapper.toDto(book);
        }else{
            throw new RuntimeException();
        }
    }

    public BookDto update(BookDto bookDto){
        boolean present = bookRepository.existsById(bookDto.getId());
        if(!present){
         throw new RuntimeException();
        }
        Book book = bookMapper.toBook(bookDto);
        Book save = bookRepository.save(book);

        return bookMapper.toDto(save);

    }

    public void delete(Long id){
        bookRepository.deleteById(id);
    }


}
