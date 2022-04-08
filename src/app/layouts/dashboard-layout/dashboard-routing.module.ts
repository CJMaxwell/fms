import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetComponent } from 'src/app/components/dashboard/asset/asset.component';
import { HomeComponent } from 'src/app/components/dashboard/home/home.component';
import { RequestComponent } from 'src/app/components/dashboard/request/request.component';
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
    path: 'assets', component: AssetComponent
  },
  {
    path: 'requests', component: RequestComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
