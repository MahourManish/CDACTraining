import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styles: `input{ margin: 10px } small{color:indianred}`
})
export class ReactiveFormComponent{
  empForm: FormGroup;
  constructor(private fb: FormBuilder, private t: Title){
    t.setTitle("Employee");
    this.empForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      salary: ['', [Validators.required, Validators.min(25000), Validators.max(50000)]],
    })
  }

  onSubmit(){
    if(this.empForm.valid){
      alert("Successfully Saved");
    }else{
      alert("Invalid Entries");
    }
  }


}
