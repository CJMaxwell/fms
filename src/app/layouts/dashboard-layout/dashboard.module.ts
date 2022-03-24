import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from 'src/app/components/dashboard/home/home.component';
import { DashboardsummaryComponent } from 'src/app/components/dashboard/dashboardsummary/dashboardsummary.component';
import { ProfileComponent } from '../../components/profile/profile.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardsummaryComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    HomeComponent,
    ProfileComponent
  ]
})
export class DashboardModule { }
