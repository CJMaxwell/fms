import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecommissionedComponent } from 'src/app/components/dashboard/assets/decommissioned/decommissioned.component';
import { MaintenanceComponent } from 'src/app/components/dashboard/assets/maintenance/maintenance.component';
import { MotorcycleComponent } from 'src/app/components/dashboard/assets/motorcycle/motorcycle.component';
// import { AssetComponent } from 'src/app/components/dashboard/asset/asset.component';
import { VehicleComponent } from 'src/app/components/dashboard/assets/vehicle/vehicle.component';
import { HomeComponent } from 'src/app/components/dashboard/home/home.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
