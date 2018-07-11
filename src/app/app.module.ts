import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core-module/core-module.module';
import  { routes} from './app-route';
import  {LoginComponent} from './features/login/login/login.component';
import {AddProductComponent} from './features/products/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FeaturesModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
