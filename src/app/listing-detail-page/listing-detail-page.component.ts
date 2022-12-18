import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {
  isLoading : boolean =true;
  listing: Listing = {id:"", name:"", description: "", price:99,views:0};

  constructor(
    private route : ActivatedRoute,
    private listingService : ListingsService,
  ) {
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.listing =<Listing>fakeListings.find(listing => listing.id===id);
    this.listingService.getListingById(<string>id)
    .subscribe(list=>{
      this.listing=list;
      this.isLoading=false;
    });
    this.listingService.addViewToListing(<string>id)
    .subscribe(()=>console.log('Views Updated')
    )
  }

}
