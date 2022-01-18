import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private router: Router, private route: ActivatedRoute, private observer: BreakpointObserver) { }

  toSalaryMgt(){
this.router.navigate(['/payroll/pay-roll/salaryMgt'], {relativeTo: this.route})
console.log('route>>', this.route)
  }

  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    debugger
      this.observer.observe(['(max-width: 800px)']).subscribe((elem)=>{
        debugger
        if(elem.matches){
          this.sidenav.mode = 'over';
          debugger
          this.sidenav.close();
        }else{
          this.sidenav.mode = 'side';
          debugger
          this.sidenav.open();
        }
      })
  }

}
