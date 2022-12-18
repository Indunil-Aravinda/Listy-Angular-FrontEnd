import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {

  listings: Listing[] = [];

  constructor(
    private listingService : ListingsService,
  ) { }

  ngOnInit(): void {
    // this.listings= fakeListings;
    this.listingService.getListingsForUser()
    .subscribe(list=>this.listings=list);
  }

  onDeleteListing(listingId:string):void{
    // alert('Deleting the listing '+listingId);
    this.listingService.deleteListing(listingId)
    .subscribe(()=>{
      this.listings = this.listings.filter(
        listing => listing.id !== listingId
      );
    });
  }

}
