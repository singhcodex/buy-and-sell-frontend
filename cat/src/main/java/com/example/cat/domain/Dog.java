package com.example.cat.domain;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table
@Data
public class Dog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String breed;

    private String color;

    private int age;
}
