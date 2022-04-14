import { SharedModule } from './../../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from 'src/app/components/dashboard/home/home.component';
import { DashboardsummaryComponent } from 'src/app/components/dashboard/dashboardsummary/dashboardsummary.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { AssetTableComponent } from '../../components/dahboard/asset-table/asset-table.component';
import { VehicleComponent } from 'src/app/components/dashboard/assets/vehicle/vehicle.component';
import { MotorcycleComponent } from '../../components/dashboard/assets/motorcycle/motorcycle.component';
import { DecommissionedComponent } from '../../components/dashboard/assets/decommissioned/decommissioned.component';
import { RequestComponent } from '../../components/dashboard/request/request.component';
import { VendorsComponent } from '../../components/dashboard/vendors/vendors.component';
import { VendorDetailsComponent } from '../../components/dashboard/vendor-details/vendor-details.component';
import { FormsModule } from '@angular/forms';
import { VendorService } from 'src/services/vendor.service';
import { MaintenanceComponent } from 'src/app/components/dashboard/assets/maintenance/maintenance.component';


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
    RequestComponent,
    VendorsComponent,
    VendorDetailsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,

  ],
  exports: [
    HomeComponent,
    ProfileComponent
  ],
  providers: [VendorService]
})
export class DashboardModule { }
