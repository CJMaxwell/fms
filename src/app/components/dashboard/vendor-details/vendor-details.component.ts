import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from 'src/services/vendor.service';


@Component({
  selector: 'fms-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.scss']
})
export class VendorDetailsComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router: Router, private vendorService: VendorService) { }

  ngOnInit(): void {
  }
  back() {
    this.router.navigateByUrl('dashboard/vendors')
  }

}
