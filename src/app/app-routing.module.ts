import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppUserRoutingModule} from "./app-user/app-user-routing.module";
import {AppProductRoutingModule} from "./app-product/app-product-routing.module";
import { LoginComponent } from './app-user/login/login.component';
import { MainProductComponent } from './app-product/main-product/main-product.component';
import { TeamComponent } from './team/team.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [

  {path: 'contact',component: LoginComponent },
  {path: 'tshirt',component: MainProductComponent },
  {path: 'team',component: TeamComponent },
  {path: 'claim',component: FormulaireComponent },
  {path: 'signup',component: SignUpComponent },
  
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
