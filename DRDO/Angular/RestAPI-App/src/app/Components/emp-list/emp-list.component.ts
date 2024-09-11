import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { Employee } from '../../Models/employee';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-emp-list',
  standalone: true,
  imports: [MatTableModule, MatCardModule],
  templateUrl: './emp-list.component.html',
  styles: ``
})
export class EmpListComponent implements OnInit{
  empList: Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'address', 'salary','empPic'];
  constructor(private es: EmployeeService){}
  ngOnInit(): void {

    this.es.getAll().subscribe(
      res => { this.empList = res; console.log(this.empList)},
      err => { console.error(err) } 
    );
  }

}
