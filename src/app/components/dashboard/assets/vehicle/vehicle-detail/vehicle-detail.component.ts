import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fms-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {

  maintHeaders = [
    'S/N', 'Maintenance ID', 'Status', 'Date', 'Description'
  ];

  assets = [
    {
      id: 'MN002',
      status: 'Ongoing',
      date: '02-11-2015',
      description: 'Car Engine has knocked...'
    },
    {
      id: 'MN012',
      status: 'Completed',
      date: '02-11-2015',
      description: 'Car Engine has knocked...'
    },
    {
      id: 'MN042',
      status: 'Ongoing',
      date: '02-11-2015',
      description: 'Car Engine has knocked...'
    },
    {
      id: 'MN052',
      status: 'Completed',
      date: '02-11-2015',
      description: 'Car Engine has knocked...'
    },
    {
      id: 'MN072',
      status: 'Completed',
      date: '02-11-2015',
      description: 'Car Engine has knocked...',
    }

  ];

  alphabets = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ];

  userHeaders = [
    'S/N', 'Name', 'MDA'
  ];

  users = [
    {
      name: 'Stanley Igwe',
      mda: 'Ministry of Finance'
    },
    {
      name: 'Tombore Tambolo',
      mda: 'Ministry of Housing'
    },
    {
      name: 'Opetunde Adepoju',
      mda: 'Governor’s Convoy'
    },
    {
      name: 'Dara Komolafe',
      mda: 'Governor’s Lodge- Main residence'
    },
    {
      name: 'Chidinma Okorie',
      mda: 'Ministry of Finance'
    },
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
