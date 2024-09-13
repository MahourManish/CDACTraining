import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface MyStateData{
  id: number,
  name: string,
  amount: number,
}

@Injectable({
  providedIn: 'root'
})
export class StateMgmtService {

  private dataSubject = new BehaviorSubject<MyStateData[]>([]);
  dataObject: Observable<MyStateData[]> = this.dataSubject.asObservable();
  constructor() { }

  addRecord(rec: MyStateData){
    const current = this.dataSubject.value;
    this.dataSubject.next([...current, rec])
  }
  
  removeRecord(id: number){
    const current = this.dataSubject.value.filter(a => a.id != id);
    this.dataSubject.next(current);
  }
  
  updateRecord(rec: MyStateData){
    const current = this.dataSubject.value.map(a => {
      if(a.id == rec.id){
        return rec;
      }else{
        return a;
      }
    });
    this.dataSubject.next(current);

  }
}
