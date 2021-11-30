import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppUserRoutingModule} from "./app-user/app-user-routing.module";
import {AppProductRoutingModule} from "./app-product/app-product-routing.module";
import { LoginComponent } from './app-user/login/login.component';
import { ProductComponent } from './app-product/product/product.component';
import { MainProductComponent } from './app-product/main-product/main-product.component';

const routes: Routes = [

  {path: 'contact',component: LoginComponent },
  {path: 'tshirt',component: MainProductComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppUserRoutingModule,
    AppProductRoutingModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
