import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styles: ``
})
export class BindingComponent {
  //create a set of data
  data: string = "Sample Text";
  fileURL: string = "";
  //u can bind the data to the user interface in two ways, interpolation and property binding. Interpolation binds the data as string only, where as property binding binds the data according to the type of the data that it is associated with

  clsbtn: string = "";
  clickButton():void{
    this.data = "Changing the value of input";
    this.clsbtn = "btn btn-primary";
    alert("Button was clicked");
  }

  onUpdate(event: any){
    this.data = event.target.value;
  }

}
