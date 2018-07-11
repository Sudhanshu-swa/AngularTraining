import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { LoginModule } from './login/login.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginModule,
    ProductsModule,
    UsersModule
  ],
  declarations: [FeaturesComponent, DashboardComponent, RegistrationComponent]
})
export class FeaturesModule { }
