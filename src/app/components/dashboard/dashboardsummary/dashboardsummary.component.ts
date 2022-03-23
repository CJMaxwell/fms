import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fms-dashboardsummary',
  templateUrl: './dashboardsummary.component.html',
  styleUrls: ['./dashboardsummary.component.scss']
})
export class DashboardsummaryComponent implements OnInit {

  @Input() title: any;
  @Input() value: any;
  @Input() icon: any;
  @Input() img: any;

  constructor() { }

  ngOnInit(): void {
  }

}
