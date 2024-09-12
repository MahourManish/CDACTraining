import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { EmployeeService } from '../../Services/employee.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Employee } from '../../Models/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-edit',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule, RouterLink],
  templateUrl: './emp-edit.component.html',
  styles: ``
})
export class EmpEditComponent {
  constructor(
    private es: EmployeeService, 
    private ar: ActivatedRoute, 
    private r: Router){}

  id: number = 0;
  emp: Employee = {} as Employee;

  ngOnInit(): void {
    this.ar.paramMap.subscribe(p => {
      this.id = parseInt(p.get('id')!);
      this.es.getOne(this.id).subscribe(r => {this.emp = r}, e => { console.error(e) });
    })
  }

  action(){
    this.es.update(this.emp).subscribe(r => {
      alert("Updated Successfully")
      this.r.navigate(['/emp-list']);
    }, e => {console.log(e)})

  }
}
