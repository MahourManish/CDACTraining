import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../Models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = "http://localhost:3000/customer/";
  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Customer[]>
  {
    return this.http.get<Customer[]>(this.baseUrl);
  }
  
  getOne(id: number): Observable<Customer>
  {
    return this.http.get<Customer>(this.baseUrl + id);
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
}
