import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  [x: string]: any;

  baseApiUrl:string=environment.baseApiUrl;

  constructor(private http:HttpClient) { }

  getAllEmployees(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.baseApiUrl+'/api/Employees')
  }

  addEmployee(addEmployeeRequest:Employee):Observable<Employee>
  {
    return this.http.post<Employee>(this.baseApiUrl+'/api/Employees',addEmployeeRequest);
  }

  getEmployee(id:string):Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl+'/api/Employees/'+id);
  }

  updateEmployee(id:string, updateEmplyeeRequest:Employee):Observable<Employee>
  {
    return this.http.put<Employee>(this.baseApiUrl+'/api/Employees/'+id,updateEmplyeeRequest);
  }

  deleteEmployee(id:string):Observable<Employee>
  {
    return this.http.delete<Employee>(this.baseApiUrl+'/api/Employees/'+id);
  }
}