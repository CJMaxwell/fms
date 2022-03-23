import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dashboardCards = [
    {
      title: 'Total visits',
      value: '1478 286',
      icon: 'assets/img/visits.svg',
      img: 'assets/img/increase-swline.svg'
    },
    {
      title: 'Total articles',
      value: '478 520',
      icon: 'assets/img/articles.svg',
      img: 'assets/img/img-article.svg'
    },
    {
      title: 'Total subscribtions',
      value: '154 872',
      icon: 'assets/img/subscriptions.svg',
      img: 'assets/img/img-sub.svg'
    },
    {
      title: 'Total authors',
      value: '167',
      icon: 'assets/img/authors.svg',
      img: 'assets/img/img-authors.svg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
