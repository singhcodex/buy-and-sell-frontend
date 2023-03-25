package com.example.bookstore.service.mapper;

import com.example.bookstore.domain.Book;
import com.example.bookstore.service.dto.BookDto;
import org.mapstruct.Mapper;


import java.util.List;

@Mapper(componentModel = "spring")
public interface BookMapper{

    Book toBook(BookDto bookDto);

    BookDto toDto(Book book);


    List<Book> toBookList(List<BookDto> bookDtos);

    List<BookDto> toDtoList(List<Book> books);

}
