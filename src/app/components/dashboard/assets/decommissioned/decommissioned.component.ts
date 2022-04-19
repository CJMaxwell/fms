import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fms-decommissioned',
  templateUrl: './decommissioned.component.html',
  styleUrls: ['./decommissioned.component.scss']
})
export class DecommissionedComponent implements OnInit {

  alphabets = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ];

  decomHeaders = [
    'S/N', 'Asset ID', 'Brand', 'Model',
    'Manufactured Year', 'Plate Number'
  ];

  decomAssets = [
    {
      assetId: 'KSG012022',
      brand: 'Bajaj',
      model: 'Hilux',
      manufacturedYear: '2015',
      plateNumber: 'KD01A69'
    },
    {
      assetId: 'KSG022022',
      brand: 'Datsun',
      model: '508',
      manufacturedYear: '2019',
      plateNumber: 'KD162A08'
    },
    {
      assetId: 'KSG012022',
      brand: 'Honda',
      model: 'Pajero',
      manufacturedYear: '2009',
      plateNumber: 'MKA449AR'
    },
    {
      assetId: 'KSG012022',
      brand: 'Mercedes Benz',
      model: 'Jeep GL',
      manufacturedYear: '2008',
      plateNumber: 'KD01A69'
    },
    {
      assetId: 'Lexus',
      brand: 'LX 570 S B/P',
      model: 'Hilux',
      manufacturedYear: '2011',
      plateNumber: 'MKA449AR'
    }

  ];

  tabIndex: number = 0;
  newAssignee: string = '';


  constructor() { }

  ngOnInit(): void {
  }


  filterUsersByFirstLetter(e: any): void {
    if (e.target.id != '') {
      this.tabIndex = +e.target.id;
    }
  }

  setSelectedUser(user: any) {
    this.newAssignee = user.name;
  }

}
