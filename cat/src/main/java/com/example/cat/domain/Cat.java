package com.example.cat.domain;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table
@Data
public class Cat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String color;

    private Integer age;



}
