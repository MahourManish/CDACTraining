import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  name: string = "Manish";
  address: string = "Delhi";
  dob: Date = new Date("06/24/1993");
  salary: number = 1000;
}
