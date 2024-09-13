import { Component } from '@angular/core';
import { MyStateData, StateMgmtService } from '../../Services/state-mgmt.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-state-mgmt',
  standalone: true,
  imports: [CommonModule,FormsModule, ButtonModule, InputTextModule],
  templateUrl: './state-mgmt.component.html',
  styles: ``
})
export class StateMgmtComponent{
  newRec: MyStateData = {} as MyStateData;
  myData: Observable<MyStateData[]>;
  constructor(private s: StateMgmtService){
    this.myData = this.s.dataObject;
  }

  addRecord(){
    if(this.newRec.id){
      this.s.updateRecord(this.newRec);
    }else{
      this.newRec.id =  new Date().getTime();
      this.s.addRecord(this.newRec);
      
    }
    this.newRec = {} as MyStateData;
    
  }

  onUpdate(id: number)
  {
    this.myData.subscribe(r => {
      r.forEach(i => {if(i.id == id) this.newRec = i })
    })
  }
  
  onDelete(id: number)
  {
    this.s.removeRecord(id);
  }

}
