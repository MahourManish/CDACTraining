import { Component, OnInit } from '@angular/core';
import { Customer } from '../../Models/customer';
import { CustomerService } from '../../Services/customer.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-view',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './customer-view.component.html',
  styles: ``
})
export class CustomerViewComponent implements OnInit{
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
  

}
