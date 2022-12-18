import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {

  // name:string='';
  // description:string='';
  // price:string='';

  constructor(
    private router: Router,
    private listingService : ListingsService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit({name,description,price}:any):void{
    // alert('Creating a new Listing');
    this.listingService.createListing(name,description,price)
    .subscribe(()=>{
      this.router.navigateByUrl('/my-listings');
    });
  }
}
