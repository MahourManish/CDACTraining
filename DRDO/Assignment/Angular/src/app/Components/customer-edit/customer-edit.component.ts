import { Component, OnInit } from '@angular/core';
import { Customer } from '../../Models/customer';
import { CustomerService } from '../../Services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './customer-edit.component.html',
  styles: ``
})
export class CustomerEditComponent implements OnInit {
  obj: Customer = {} as Customer;
  id: number = 0;
  errorText: string = "";
  constructor(private cs: CustomerService, private r: Router, private ar: ActivatedRoute){}
  ngOnInit(): void {
    this.ar.paramMap.subscribe(p => {
      this.id = parseInt(p.get('id')!);
      this.cs.getOne(this.id).subscribe(r => {this.obj = r}, e => { this.errorText = e.error.error });
    })
  }

  action(){

    if(this.obj.name == "" || this.obj.name == null || this.obj.name == undefined){
      this.errorText = "Name is Mandatory";
      return;
    }
    if(this.obj.address == "" || this.obj.address == null || this.obj.address == undefined){
      this.errorText = "Address is Mandatory";
      return;
    }
    if(this.obj.age == 0 || this.obj.age == null || this.obj.age == undefined){
      this.errorText = "Age is Mandatory";
      return;
    }

    this.cs.update(this.obj).subscribe(res => {
      alert("Successfully Saved");
      this.r.navigate(['/']);
    }, err => {
      this.errorText = err.error.error;
    })

  }
}
