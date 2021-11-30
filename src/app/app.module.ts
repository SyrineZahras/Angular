import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppUserModule} from "./app-user/app-user.module";
import {AppProductModule} from "./app-product/app-product.module";
import {AppSharedModule} from "./app-shared/app-shared.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TemplateComponent } from './template/template.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule} from "@angular/router";
import { FooterComponent } from './footer/footer.component';

import { MainOfferComponent } from './main-offer/main-offer.component';
import { HeadComponent } from './head/head.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    FooterComponent,

    MainOfferComponent,
    HeadComponent

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
