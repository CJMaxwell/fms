import { VendorInterface } from './../../../shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { VendorService } from '../../../../services/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fms-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss'],
})
export class VendorsComponent implements OnInit {
  sub!: Subscription;
  errorMessage = '';
  vendors2 = [
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

  private _listFilter: any = '';

  get listFilter(): any {
    return this._listFilter;
  }

  set listFilter(value: any) {
    this._listFilter = value;
    this.filteredVendors = this.performFilter(value);
  }

  filteredVendors: VendorInterface[] = [];
  vendors: VendorInterface[] = [];
  total: number = this.vendors2.length;
  performFilter(filterBy: string): VendorInterface[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.vendors.filter(
      (p: VendorInterface) =>
        p.FirstName.toLocaleLowerCase().includes(filterBy) ||
        p.LastName.toLocaleLowerCase().includes(filterBy) ||
        p.Id.toLocaleLowerCase().includes(filterBy) ||
        p.assetType.toLocaleLowerCase().includes(filterBy) ||
        p.Address.toLocaleLowerCase().includes(filterBy)
    );
  }

  constructor(private vendorService: VendorService,private router: Router) {}

  ngOnInit(): void {
    this.sub = this.vendorService.getVendors().subscribe({
      next: (vendors: VendorInterface[]) => {
        console.log(vendors, 'vend');
        this.vendors = vendors;
        this.filteredVendors = this.vendors;
      },
      error: (err: string) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}

