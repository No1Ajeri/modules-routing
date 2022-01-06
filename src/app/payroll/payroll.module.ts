import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { PayrollComponent } from './payroll.component';
import { SalaryManagementComponent } from './salaryMgt/salary-management/salary-management.component';


@NgModule({
  declarations: [
    PayrollComponent,
    SalaryManagementComponent
  ],
  imports: [
    CommonModule,
    PayrollRoutingModule
  ]
})
export class PayrollModule { }
