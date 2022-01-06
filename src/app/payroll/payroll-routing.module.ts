import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollComponent } from './payroll.component';
import { SalaryManagementComponent } from './salaryMgt/salary-management/salary-management.component';

const routes: Routes = [
  { path: 'pay-roll', component: PayrollComponent,
children: [
  { path: '', component: PayrollComponent, pathMatch:'full'},
  {path: 'pay-roll/salaryMgt', component: SalaryManagementComponent}
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
