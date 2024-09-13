import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../Models/customer';
import { CustomerService } from '../../Services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-add.component.html',
  styles: ``
})
export class CustomerAddComponent {
  obj: Customer = {} as Customer;
  errorText: string = "";
  constructor(private cs: CustomerService, private r: Router){}

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
    this.cs.save(this.obj).subscribe(res => {
      alert("Successfully Saved");
      this.r.navigate(['/']);
    }, err => {
      this.errorText = err.error.error;
    })

  }

}
