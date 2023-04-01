import { fakeListings } from './../fake-data';
import { Listing } from './../types';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  listing?: Listing;
  email: String = '';
  message: String = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id);
    this.message = `Hey! I am interested in your ${this.listing?.name}`;

  }

  sendMessage(): void{
    alert('your message has been sent!');
    this.router.navigateByUrl('/listings');
  }

}
