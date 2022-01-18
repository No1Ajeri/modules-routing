import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  routeToSalaryMgt(){
this.router.navigate(['salaryMgt'],{relativeTo: this.route});
console.log('route>>', this.router)
  }

  ngOnInit(): void {
  }

}
