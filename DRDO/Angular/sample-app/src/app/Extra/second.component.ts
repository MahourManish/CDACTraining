import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../Pipes/reverse.pipe';
//import { ReversePipe } from ''

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule,ReversePipe],
  template: `<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div style="border: 2px solid coral; padding: 10px;border-radius: 10px;background-color: lightcoral;">
                <h2>Mr. {{name | reverse}}</h2>
                <hr>
                <p>Address: {{address}}</p>
                <p>DOB: {{dob | date: 'dd MMM yyyy'}}</p>
                <p>Last Salary: {{salary | currency: 'INR'}} per annum</p>
                <p>Job Status: Fired</p>
            </div>
        </div>
    </div>
</div>`,
  styles: ''
})
export class SecondComponent {
  name: string = "Neeraj Pandey";
  address: string = "Delhi";
  dob: Date = new Date("12/07/1992");
  salary: number = 499;
}
