import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from 'src/app/components/dashboard/home/home.component';
import { DashboardsummaryComponent } from 'src/app/components/dashboard/dashboardsummary/dashboardsummary.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { AssetTableComponent } from '../../components/dahboard/asset-table/asset-table.component';
import { VehicleComponent } from 'src/app/components/dashboard/assets/vehicle/vehicle.component';
import { MotorcycleComponent } from '../../components/dashboard/assets/motorcycle/motorcycle.component';
import { MaintenanceComponent } from '../../components/dashboard/assets/maintenance/maintenance.component';
import { DecommissionedComponent } from '../../components/dashboard/assets/decommissioned/decommissioned.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardsummaryComponent,
    ProfileComponent,
    AssetTableComponent,
    VehicleComponent,
    MotorcycleComponent,
    MaintenanceComponent,
    DecommissionedComponent,
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
