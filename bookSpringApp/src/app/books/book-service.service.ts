import { Injectable } from '@angular/core';
import {Book} from "./book";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public create(book: Book): Observable<Book>{
    return this.http.post('http://localhost:8080/api/v1/books/create', book, this.httpOptions)

  }
   public getAllBooks(): Observable<Book[]>{
      return this.http.get<Book[]>('http://localhost:8080/api/v1/books');
   }

   public deleteById(id:number){
     return this.http.delete(`http://localhost:8080/api/v1/books/${id}`);
   }
}
