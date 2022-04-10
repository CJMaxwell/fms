import { VendorInterface } from './../../../shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { VendorService } from '../../../../services/vendor.service';

@Component({
  selector: 'fms-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
  sub!: Subscription;
  errorMessage='';



  private _listFilter:any='';

get listFilter():any{
  return this._listFilter
}

set listFilter(value:any){
  this._listFilter=value;
  this.filteredVendors=this.performFilter(value)
}

filteredVendors: VendorInterface[] = [];
vendors: VendorInterface[] = [];
total:number=this.vendors.length;
performFilter(filterBy:string):VendorInterface[]{
  filterBy=filterBy.toLocaleLowerCase();
  return this.vendors.filter((p:VendorInterface)=>
  p.vendorFirstName.toLocaleLowerCase().includes(filterBy)||
  p.vendorLastName.toLocaleLowerCase().includes(filterBy)||
  p.vendorId.toLocaleLowerCase().includes(filterBy)||
  p.assetType.toLocaleLowerCase().includes(filterBy)||
  p.vendorAddress.toLocaleLowerCase().includes(filterBy)
  );
}


  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    this.sub = this.vendorService.getVendors().subscribe({
      next: (vendors: VendorInterface[]) => {
        this.vendors = vendors;
        this.filteredVendors = this.vendors;
      },
      error: (err: string) => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}


