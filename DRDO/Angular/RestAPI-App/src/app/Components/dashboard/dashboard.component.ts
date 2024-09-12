import { Component } from '@angular/core';
import { Employee } from '../../Models/employee';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {
  empList: Employee[] = [];
  constructor(private es: EmployeeService){}
  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.es.getAll().subscribe(
      res => { this.empList = res; console.log(this.empList)},
      err => { console.error(err) } 
    );
  }

}
