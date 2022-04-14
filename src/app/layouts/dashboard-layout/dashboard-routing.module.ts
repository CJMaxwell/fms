import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecommissionedComponent } from 'src/app/components/dashboard/assets/decommissioned/decommissioned.component';
import { MaintenanceComponent } from 'src/app/components/dashboard/assets/maintenance/maintenance.component';
import { MotorcycleComponent } from 'src/app/components/dashboard/assets/motorcycle/motorcycle.component';
// import { AssetComponent } from 'src/app/components/dashboard/asset/asset.component';
import { VehicleComponent } from 'src/app/components/dashboard/assets/vehicle/vehicle.component';
import { HomeComponent } from 'src/app/components/dashboard/home/home.component';
import { RequestComponent } from 'src/app/components/dashboard/request/request.component';
import { VendorDetailsComponent } from 'src/app/components/dashboard/vendor-details/vendor-details.component';
import { VendorsComponent } from 'src/app/components/dashboard/vendors/vendors.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'dashboard', component: HomeComponent
      }
    ]
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'assets/vehicles', component: VehicleComponent
  },
  {
    path: 'assets/motorcycles', component: MotorcycleComponent
  },
  {
    path: 'assets/maintenance', component: MaintenanceComponent
  },
  {
    path: 'assets/decommissioned', component: DecommissionedComponent
  },
  {
    path: 'requests', component: RequestComponent
  },
  {
    path: 'vendors', component: VendorsComponent
  }
  ,
  {
    path: 'vendors/:id', component: VendorDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
