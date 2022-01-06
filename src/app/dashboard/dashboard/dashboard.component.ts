import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  toSalaryMgt(){
this.router.navigate(['salaryMgt'], {relativeTo: this.route})
console.log('route>>', this.route)
  }
  ngOnInit(): void {
  }

}
