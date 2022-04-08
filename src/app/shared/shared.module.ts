import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoaderComponent } from './loader/loader.component';
import { FilterComponent } from './filter/filter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { CollapseTableComponent } from './collapse-table/collapse-table.component';



@NgModule({
  declarations: [
    FilterComponent,
    LoaderComponent,
    NavbarComponent,
    TableComponent,
    CollapseTableComponent
  ],
  exports:[
    FilterComponent,
    LoaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ]
})
export class SharedModule { }
