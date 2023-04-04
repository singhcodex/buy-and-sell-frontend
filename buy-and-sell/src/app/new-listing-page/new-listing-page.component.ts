import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {ListingsService} from "../listings.service";

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent {


  name: String = '';
  description: String = '';
  price: String = '';

  constructor(
    private router: Router,
    private listingsService: ListingsService
  ){}


  onSubmit({name, description, price}:any): void{
    this.listingsService.createListing(name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      });
  }

}
