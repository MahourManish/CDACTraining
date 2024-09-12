import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = "http://localhost:3000/employees/";
  constructor(private http: HttpClient) {
    
  }

  getAll(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.baseUrl);
  }
  
  getOne(id: number): Observable<Employee>
  {
    return this.http.get<Employee>(this.baseUrl + id);
  }
  
  save(data: any): Observable<any>
  {
    return this.http.post<any>(this.baseUrl, data);
  }
  
  update(data: any): Observable<any>
  {
    return this.http.put<any>(this.baseUrl + data.id, data);
  }
  
  delete(id: number): Observable<any>
  {
    return this.http.delete<any>(this.baseUrl + id);
  }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file, file.name);

    return this.http.post<any>(this.baseUrl + 'upload', formData);
  }
}
