import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login/login.component'
import { AddProductComponent } from './features/products/add-product/add-product.component'
import { RegistrationComponent } from './features/registration/registration.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'dashboard', component: DashboardComponent },
]