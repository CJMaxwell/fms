import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fms-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  title = 'Filters';

  constructor() { }

  ngOnInit(): void {
  }

}
