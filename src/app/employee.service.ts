import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public url: string = "/assets/data/data.json";
   constructor(private http: HttpClient) { }
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url)
                    
          
  }
}
