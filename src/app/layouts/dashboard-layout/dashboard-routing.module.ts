import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecommissionedComponent } from 'src/app/components/dashboard/assets/decommissioned/decommissioned.component';
import { MaintenanceDetailComponent } from 'src/app/components/dashboard/assets/maintenance/maintenance-detail/maintenance-detail.component';
import { MaintenanceComponent } from 'src/app/components/dashboard/assets/maintenance/maintenance.component';
import { MotorcycleComponent } from 'src/app/components/dashboard/assets/motorcycle/motorcycle.component';
import { VehicleDetailComponent } from 'src/app/components/dashboard/assets/vehicle/vehicle-detail/vehicle-detail.component';
// import { AssetComponent } from 'src/app/components/dashboard/asset/asset.component';
import { VehicleComponent } from 'src/app/components/dashboard/assets/vehicle/vehicle.component';
import { HomeComponent } from 'src/app/components/dashboard/home/home.component';
import { RequestComponent } from 'src/app/components/dashboard/request/request.component';
import { UserDetailsComponent } from 'src/app/components/dashboard/user-details/user-details.component';
import { UsersComponent } from 'src/app/components/dashboard/users/users.component';
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
    path: 'assets/vehicles/:id', component: VehicleDetailComponent
  },
  {
    path: 'assets/motorcycles', component: MotorcycleComponent
  },
  {
    path: 'assets/maintenance', component: MaintenanceComponent
  },
  {
    path: 'assets/maintenance/:id', component: MaintenanceDetailComponent
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
  },
  {
    path: 'users', component: UsersComponent
  }
  ,
  {
    path: 'users/:id', component: UserDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
