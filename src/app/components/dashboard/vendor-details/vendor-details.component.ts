import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from 'src/services/vendor.service';


@Component({
  selector: 'fms-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.scss']
})
export class VendorDetailsComponent implements OnInit {
  vendors = [
    {
      Id: 241,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@vendor.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 242,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@vendor.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 243,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@vendor.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 244,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@vendor.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 245,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@vendor.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 246,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@vendor.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 247,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@vendor.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 248,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@vendor.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 249,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@vendor.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 250,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@vendor.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 253,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@vendor.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 254,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@vendor.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 255,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@vendor.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 256,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@vendor.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 257,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@vendor.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 258,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@vendor.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
    },

  ]
  vendorId: any;
  vendor: any[]=[];

  constructor(private route: ActivatedRoute, private router: Router, private vendorService: VendorService) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.vendorId = params.id;
      // this.vendorService.getVendorById(this.vendorId).subscribe(vendor => {
      //   //this.vendor = vendor;
      //  // this.vendor.assets = this.assets;
      // });
    })

    if(this.vendorId){
       this.vendor = this.vendors.filter(v => v.Id == this.vendorId);
       console.log(this.vendor);
    }
  }
  back() {
    this.router.navigateByUrl('dashboard/vendors')
  }

}
