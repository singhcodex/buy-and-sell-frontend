import { Router } from '@angular/router';
import { Component } from '@angular/core';

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
    private router: Router
  ){}


  onSubmit(): void{
    alert('Creating new Listing...');
    this.router.navigateByUrl('/my-listings');
  }

}
