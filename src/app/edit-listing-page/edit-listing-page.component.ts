import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';


@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {

  listing: Listing={id:'',name:'',description:'',price:0,views:0};

  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private listingService : ListingsService,

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    // console.log(fakeListings);
    
    // this.listing=<Listing>fakeListings.find(list=>list.id===id);
    // console.log(this.listing);
    
    this.listingService.getListingById(<string>id)
    .subscribe(list => this.listing=list);
  }
  onSubmit({name, description,price}:any) : void{
    // alert('Saving changes...');
    this.listingService.editListing(this.listing.id, name, description, price)
    .subscribe(()=>{
      this.router.navigateByUrl('/my-listings');

    });
  }

}
