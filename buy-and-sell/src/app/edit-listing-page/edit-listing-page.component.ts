import { fakeMyListings } from './../fake-data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit{

 listing?: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ){}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeMyListings.find(listing => listing.id === id);
  }

onSubmit() {
  alert('Save Change Submitted!!');
  this.router.navigateByUrl('/my-listings');
}

}
