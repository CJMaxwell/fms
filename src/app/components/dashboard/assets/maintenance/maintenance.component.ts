import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fms-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

  maintStats = [
    {
      title: 'All',
      value: '173',
      icon: 'assets/img/maint-all.svg',
      img: 'assets/img/increase-swline.svg'
    },
    {
      title: 'Completed Maintenance',
      value: '112',
      icon: 'assets/img/maint-com.svg',
      img: 'assets/img/increase-swline.svg'
    },
    {
      title: 'Ongoing Maintenance',
      value: '143',
      icon: 'assets/img/maint-ong.svg',
      img: 'assets/img/increase-swline.svg'
    },
  ]

  maintHeaders = [
    'S/N', 'Maintenance ID', 'Manufacturer', 'Model',
    'Color', 'Plate Number', 'Asset Type', 'Category',
    'Status', 'Vendor'
  ];

  assets = [
    {
      id: 'MN002',
      manufacturer: 'Mitsubishi',
      model: 'Hilux',
      color: 'White',
      plateNumber: 'KD01A69',
      assetType: 'Vehicle',
      category: 'Service',
      status: 'Ongoing',
      vendor: 'Maxwell Chukwunonyerem',
    },
    {
      id: 'MN012',
      manufacturer: 'Peugeot',
      model: '508',
      color: 'Blue',
      plateNumber: 'KD162A08',
      assetType: 'Motorcycle',
      category: 'Repair',
      status: 'Completed',
      vendor: 'Ekene Chikwendu',
    },
    {
      id: 'MN042',
      manufacturer: 'Lexus',
      model: 'LX 570 S B/P',
      color: 'Green',
      plateNumber: 'MKA449AR',
      assetType: 'Vehicle',
      category: 'Service',
      status: 'Ongoing',
      vendor: 'Damilola Iranloye',
    },
    {
      id: 'MN052',
      manufacturer: 'Ford',
      model: 'Ranger F-150',
      color: 'Brown',
      plateNumber: 'KD01A69',
      assetType: 'Motorcycle',
      category: 'Repair',
      status: 'Completed',
      vendor: 'Ekene Chikwendu',
    },
    {
      id: 'MN072',
      manufacturer: 'Jeep',
      model: 'Land Rover',
      color: 'Branded',
      plateNumber: 'MKA449AR',
      assetType: 'Motorcycle',
      category: 'Repair',
      status: 'Completed',
      vendor: 'Chidinma Okorie',
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
