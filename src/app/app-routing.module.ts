import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent},
  { path: 'loansAdvance', loadChildren: () => import('./loans-advance/loans-advance.module').then(m => m.LoansAdvanceModule) },
  { path: 'payroll', loadChildren: () => import('./payroll/payroll.module').then(m => m.PayrollModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Home Address, Phone Number, Acct Number, Account Name, Bank Name
