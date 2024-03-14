import { Component } from '@angular/core';
import { LoginUser } from '../../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   loginUse:LoginUser = {
    email:'',
    password:'',
   }
   constructor(private route:Router){

   }

    setItem(key: string, loginUse: any): void {
    localStorage.setItem(key, JSON.stringify(loginUse));
  }
 
  OnSubmit(){
    console.log(this.loginUse)
    this.route.navigateByUrl('/dashboard')

    // Send data to local storage
    localStorage.setItem('model', JSON.stringify(this.loginUse));
    sessionStorage.setItem('model', JSON.stringify(this.loginUse));

  }

}
