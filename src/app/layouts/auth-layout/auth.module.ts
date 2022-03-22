import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from 'src/app/components/login/login.component';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent,
    LoaderComponent
  ]
})
export class AuthModule { }
