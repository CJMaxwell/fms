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

  constructor() { }

  ngOnInit(): void {
  }

}
