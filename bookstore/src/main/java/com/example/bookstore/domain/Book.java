package com.example.bookstore.domain;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Generated;
import org.springframework.data.annotation.CreatedDate;

import java.time.Instant;

@Entity
@Table
@Data
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String author;

    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    private Instant created = Instant.now();
}
