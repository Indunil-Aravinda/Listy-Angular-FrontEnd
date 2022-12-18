import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  valueAssigned :boolean = false;
  email : string = '';
  message : string='';
  listing: Listing;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private listingService : ListingsService,
  ) {
    // this.listing = {id:'',description:'',name:'',price:0,views:0};
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.listing= <Listing> fakeListings.find(l=>l.id===id);
    try {
      this.listingService.getListingById(<string>id)
    .subscribe(list=>{
      this.listing=list;
      this.valueAssigned = true;
      this.message='Hi, I want to buy '+ this.listing.name.toLowerCase();
    });
    } catch (error) {
      console.log(error);
    } finally{
      // this.message='Hi, I want to buy '+ this.listing.name.toLowerCase();
    }
  }

  sendMessage() : void{
    alert('Succesfully sent');
    this.router.navigateByUrl('/listings');
  }
}
