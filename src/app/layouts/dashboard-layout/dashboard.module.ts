import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from 'src/app/components/dashboard/home/home.component';
import { DashboardsummaryComponent } from 'src/app/components/dashboard/dashboardsummary/dashboardsummary.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardsummaryComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class DashboardModule { }
