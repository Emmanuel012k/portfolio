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

    emailMesssage:boolean = false;
    passwordMessage:boolean = false;
   constructor(private route:Router, private repoServce:ZaxosService){
  
   }

    setItem(key: string, loginUse: any): void {
    localStorage.setItem(key, JSON.stringify(loginUse));
  }
 
  OnSubmit(){
    
     // Email validation with regular expression
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(this.loginUse.email)) {
      this.emailMesssage = true;
      // this.emailMesssage = 'Invalid email format.';
      return; // Prevent further processing if email is invalid
    }

    // Password validation (add complexity requirements as needed)
    if (this.loginUse.password.length < 6) {
      this.passwordMessage = true;
      // this.passwordMessage = 'Password must be at least 6 characters long.';
      return; // Prevent further processing if password is invalid
    }


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

  closeMessage() {
    this.passwordMessage = false; // Hide the error message element
  }

  emailClose() {
    this.emailMesssage = false; // Hide the error message element
  }

}
