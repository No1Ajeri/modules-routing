import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansAdvanceRoutingModule } from './loans-advance-routing.module';
import { LoansAdvanceComponent } from './loans-advance.component';


@NgModule({
  declarations: [
    LoansAdvanceComponent
  ],
  imports: [
    CommonModule,
    LoansAdvanceRoutingModule
  ]
})
export class LoansAdvanceModule { }
