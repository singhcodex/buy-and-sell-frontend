import { fakeMyListings } from './../fake-data';
import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit{

  listings: Listing[] = [];

  ngOnInit(): void {
    this.listings = fakeMyListings;
  }

  onDeleteById(listingId: String):void{
    alert(`Deleting your listing with id ${listingId}`);
  }
}
