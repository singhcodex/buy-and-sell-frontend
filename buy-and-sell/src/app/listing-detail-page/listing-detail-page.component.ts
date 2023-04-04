import { Listing } from './../types';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ListingsService} from "../listings.service";

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit{

  listing?: Listing;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(id!!)
      .subscribe(listing => {
        this.listing = listing;
        this.isLoading = false;
      });

    this.listingsService.addViewToListing(id!!).subscribe(() => console.log('View Updated'));
  }

}
