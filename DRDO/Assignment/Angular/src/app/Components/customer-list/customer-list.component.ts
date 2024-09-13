import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../Services/customer.service';
import { Customer } from '../../Models/customer';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterCustomerPipe } from '../../Pipes/filter-customer.pipe';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule,RouterLink, FormsModule,FilterCustomerPipe],
  templateUrl: './customer-list.component.html',
  styles: ``
})
export class CustomerListComponent implements OnInit {
  cList: Customer[] = [];
  errorText: string = "";
  searchValue: string = "";
  ngOnInit(): void {
    this.cs.getAll().subscribe(res =>{
      this.cList = res;
    },
    err => {
      console.log(err);
      this.errorText = err.message;
    }
  )
    
  }
  constructor(private cs: CustomerService){}

}
