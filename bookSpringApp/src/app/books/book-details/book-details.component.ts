import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Book} from "../book";
import {BookServiceService} from "../book-service.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
 myBook  = new Book(undefined,'','');


 constructor(private service :BookServiceService, private router: Router) {
 }
  onSubmit(){
   this.service.create(this.myBook).subscribe((result) => {
     this.myBook =  result;
    return this.router.navigate(['/'])
   });
 }

}
