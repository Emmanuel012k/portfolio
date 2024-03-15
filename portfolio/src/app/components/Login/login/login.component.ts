import { Component } from '@angular/core';
 
import { Router } from '@angular/router';
import { ZaxosService } from 'src/app/services/zaxos.service';
import { UserModel } from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   loginUse:UserModel = {
    email:'',
    password:'',
   }

   image:string = 'https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

   successMesssage:boolean = false;
   errorMessgae:boolean = false;
   constructor(private route:Router, private repoServce:ZaxosService){
  
   }

    setItem(key: string, loginUse: any): void {
    localStorage.setItem(key, JSON.stringify(loginUse));
  }
 
  OnSubmit(){
    console.log(this.loginUse)
    // this.route.navigateByUrl('/dashboard')
    this.successMesssage = true;
    this.repoServce.loginAdd(this.loginUse).subscribe({
      next:(response) => {
        console.log(response);
         setTimeout(() => {
     this.route.navigateByUrl('/dashboard')
    }, 3000); 
        
      },
        error:(err) => {
        console.log(err);
        this.errorMessgae = true;
      },
    })
    // Send data to local storage
    localStorage.setItem('model', JSON.stringify(this.loginUse));
    sessionStorage.setItem('model', JSON.stringify(this.loginUse));

  }

}
