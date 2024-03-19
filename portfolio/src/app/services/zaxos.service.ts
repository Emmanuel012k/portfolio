import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../components/models/login.model';
import { Observable } from 'rxjs';
import { Register } from '../components/models/register.model';
import { EmployeeModel } from '../components/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class ZaxosService {

  constructor(private _http:HttpClient) { }
  
  loginAdd(data:UserModel) : Observable <UserModel>{
    return this._http.post<UserModel>('http://localhost:3000/loginUser', data);
  }

  getUsers() :Observable <UserModel[]>{
   return this._http.get<UserModel[]>('http://localhost:3000/loginUser');
  }

  registerAdd(model:Register):Observable <Register>{
   return this._http.post<Register>('http://localhost:3000/registerUser', model);
  }

  // addEmployee
  addEmployees(model:EmployeeModel):Observable <EmployeeModel>{
   return this._http.post<EmployeeModel>('http://localhost:3000/employees', model)
  }

   // getEmployees
  getEmployees():Observable <EmployeeModel[]>{
   return this._http.get<EmployeeModel[]>('http://localhost:3000/employees')
  }

}
