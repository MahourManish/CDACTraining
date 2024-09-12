import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { Employee } from '../../Models/employee';
import { TableModule } from 'primeng/table';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-emp-list',
  standalone: true,
  imports: [TableModule, RouterLink, CardModule, DividerModule],
  templateUrl: './emp-list.component.html',
  styles: ``
})
export class EmpListComponent implements OnInit{
  empList: Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'address', 'salary','empPic'];
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

  deleteRow(id: number){
    console.log(id);
    this.es.delete(id).subscribe(r => {alert("Successfully Deleted"); this.loadData();}, e => {console.error(e)});
  }

}
