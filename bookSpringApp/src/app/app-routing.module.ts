import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {BooksComponent} from "./books/books.component";
import {BookDetailsComponent} from "./books/book-details/book-details.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BooksComponent
  },
  {
    path: 'details',
    component: BookDetailsComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
