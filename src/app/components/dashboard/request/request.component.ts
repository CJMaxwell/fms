import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fms-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  assets = [
    {
      id: 'KSG012022',
      brand: 'Toyota',
      model: 'Hilux',
      mda: 'Kaduna State Planning and Budget Commission',
      year: '2015',
      color: 'White',
      plateNumber: 'KD01A69',
    },
    {
      id: 'KSG022022',
      brand: 'Peugeot',
      model: '508',
      mda: 'Kaduna State Bureau of Statistics',
      year: '2019',
      color: 'Blue',
      plateNumber: 'KD162A08',
    },
    {
      id: 'KSG032022',
      brand: 'Mitsubishi',
      model: 'Pajero',
      mda: 'Security Personnel',
      year: '2009',
      color: 'Silver',
      plateNumber: 'MKA449AR',
    },
    {
      id: 'KSG042022',
      brand: 'Mercedes Benz',
      model: 'Jeep GL',
      mda: 'Kaduna State Ministry of Education',
      year: '2008',
      color: 'Black',
      plateNumber: 'KD01A69',
    },
    {
      id: 'KSG052022',
      brand: 'Lexus',
      model: 'LX 570 S B/P',
      mda: 'Kaduna State Universal Basic Education Board',
      year: '2011',
      color: 'Green',
      plateNumber: 'MKA449AR',
    },
    {
      id: 'KSG062022',
      brand: 'Ford',
      model: 'Ranger F-150',
      mda: 'Kaduna State Public Procurement Authority',
      year: '2013',
      color: 'Brown',
      plateNumber: 'KD01A69',
    },
    {
      id: 'KSG072022',
      brand: 'Honda',
      model: 'Accord',
      mda: 'Kaduna State Ministry of Finance',
      year: '2014',
      color: 'Grey',
      plateNumber: 'KD162A08',
    },
    {
      id: 'KSG082022',
      brand: 'Jeep',
      model: 'Land Rover',
      mda: 'Kaduna State College of Education GIDAN WAYA',
      year: '2007',
      color: 'Branded',
      plateNumber: 'MKA449AR',
    }
  ]

  dashboardCards = [
    {
      title: 'All Requests',
      value: '173',
      icon: 'assets/img/fileBlue.svg',
      img: 'assets/img/increase-swline.svg'
    },
    {
      title: 'Pending Requests',
      value: '112',
      icon: 'assets/img/articles.svg',
      img: 'assets/img/img-article.svg'
    },
    {
      title: 'Ongoing Requests',
      value: '09',
      icon: 'assets/img/fileOutlineBlue.svg',
      img: 'assets/img/img-sub.svg'
    },
    {
      title: 'Approved Requests',
      value: '14',
      icon: 'assets/img/fileGreen.svg',
      img: 'assets/img/img-authors.svg'
    }
  ]
  constructor() { }

  ngOnInit(): void {

  }
  search(search: any){

    console.log(search)

  }



}
