import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = "http://localhost:3000/employees";
  constructor(private http: HttpClient) {
    
  }

  getAll(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.baseUrl);
  }
}
