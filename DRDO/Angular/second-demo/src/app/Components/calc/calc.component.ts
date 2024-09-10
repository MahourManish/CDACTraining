import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  fVal: number = 0.0;
  sVal: number = 0.0;
  res: number = 0.0;
  operation: number = 1;

  opList = [
    {id: 1, name: 'Add', func: (v1: number, v2: number) => v1+v2},
    {id: 2, name: 'Subtract', func: (v1: number, v2: number) => v1-v2},
    {id: 3, name: 'Multiply', func: (v1: number, v2: number) => v1*v2},
    {id: 4, name: 'Divide', func: (v1: number, v2: number) => v1/v2},
  ];

  Calculate(){
    this.res = this.opList.find(a => a.id == this.operation)!.func(this.fVal, this.sVal)
  }



  





}
