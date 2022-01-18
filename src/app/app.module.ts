import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NavSideBarComponent } from './nav-sideBar/nav-side-bar/nav-side-bar.component';
import { PayrollModule } from './payroll/payroll.module';
import { LoansAdvanceModule } from './loans-advance/loans-advance.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavSideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     PayrollModule,
     LoansAdvanceModule,
     BrowserAnimationsModule,
     MatToolbarModule,
     MatSidenavModule,
     MatButtonModule,
     MatIconModule,
     MatDividerModule,
     LayoutModule
     
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//Note: run ng generate module Payroll --route Payroll --module app.module 
//The above command is used to proffesionally generate a component named payroll inside a module
//named Payroll with router module All automatically generated.