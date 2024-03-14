import { Component } from '@angular/core';
import { Register } from '../../models/register.model';
// import {LocalStorageSerivce } from './local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model:Register = {
    name:'',
    email:'',
    password:''
  }

  constructor(){}

   setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(this.model));
  }

  OnRegister(){
    console.log(this.model)
    
    
  }


}
