import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NavSideBarComponent } from './nav-sideBar/nav-side-bar/nav-side-bar.component';
import { PayrollModule } from './payroll/payroll.module';
import { LoansAdvanceModule } from './loans-advance/loans-advance.module';

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
     LoansAdvanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//Note: run ng generate module Payroll --route Payroll --module app.module 
//The above command is used to proffesionally generate a component named payroll inside a module
//name Payroll with router module All automatically generated.