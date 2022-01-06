import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansAdvanceComponent } from './loans-advance.component';

const routes: Routes = [
  { path: 'loans-advance', component: LoansAdvanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansAdvanceRoutingModule { }
