package com.example.bookstore.service.dto;

import lombok.Data;
import lombok.experimental.SuperBuilder;

import java.time.Instant;

@Data
public class BookDto {

    private Long id;

    private String name;

    private String author;

}
