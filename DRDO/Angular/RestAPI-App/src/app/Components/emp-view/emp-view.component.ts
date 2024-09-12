import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Employee } from '../../Models/employee';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-emp-view',
  standalone: true,
  imports: [InputTextModule, RouterLink, ButtonModule],
  templateUrl: './emp-view.component.html',
  styles: ``
})
export class EmpViewComponent implements OnInit{
  constructor(private es: EmployeeService, private ar: ActivatedRoute){

  }

  id: number = 0;
  emp: Employee = {} as Employee;

  ngOnInit(): void {
    this.ar.paramMap.subscribe(p => {
      this.id = parseInt(p.get('id')!);
      this.es.getOne(this.id).subscribe(r => {this.emp = r}, e => { console.error(e) });
    })
  }


}
