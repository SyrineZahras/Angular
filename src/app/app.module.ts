import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppUserModule} from "./app-user/app-user.module";
import {AppProductModule} from "./app-product/app-product.module";
import {AppSharedModule} from "./app-shared/app-shared.module";
import {HttpClientModule} from "@angular/common/http";
import { TemplateComponent } from './template/template.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes } from "@angular/router";
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';
import { AccueilComponent } from './accueil/accueil.component';
import {MatCardModule} from '@angular/material/card';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './shared/user.service';

import { ToastrModule } from 'ngx-toastr';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedComponent } from './shared/shared.component';







@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    TeamComponent,
    FooterComponent,
    HeadComponent,
    AccueilComponent,
    FormulaireComponent,
    SignUpComponent,
    SharedComponent,
    

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AppUserModule,
    AppProductModule,
    AppSharedModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added


    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


