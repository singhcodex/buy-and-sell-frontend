import {Component, Input, OnInit} from '@angular/core';
import {Book} from "./book";
import {BookServiceService} from "./book-service.service";
import {filter} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  bookList: Book[] = [];

  current: number | undefined = 0;

  message: string = '';
  constructor(private bookService: BookServiceService) {
  }
  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((result) => {
      this.bookList = result;
    });
  }

  deleteById(){
    this.bookService.deleteById(this.current!!).subscribe((result) => {
      this.bookList.filter(book => book.id != this.current);
      return this.bookService.getAllBooks().subscribe((result) => {
        this.bookList = result;
        this.message = 'Book deleted Sucessfully';
      });
    });
  }


}
