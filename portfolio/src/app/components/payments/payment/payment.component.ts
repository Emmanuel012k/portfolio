import { Component, OnDestroy } from '@angular/core';
import { Payment } from '../../models/payments.model';
import { ZaxosService } from 'src/app/services/zaxos.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnDestroy{
    emailMessage:boolean = false;
    fistNae:boolean = false;
    sucessMessage:boolean = false;
    private paymentSubscription?: Subscription

   addPayment:Payment = {
    id:'',
    firstName:'',
    email:'',
    cardNumber:0,
    cvv:0,
    zipCode:0,
    country:''
   }

   countries = [
    'India',
    'USA',
    'Germany',
    'England',
    'Africa',
    'Austria',
    'Australia',
    'NewZealand',
    'Dubai',
    'Poland',
    'China',
   ]



   constructor(private zaxosServices:ZaxosService, private route:Router){}



  ngOnDestroy(): void {
     this.paymentSubscription?.unsubscribe()
     console.log('unsubscribe')
  }

  onBookingSubmit(){

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(this.addPayment.email)) {
      this.emailMessage = true;
      // this.emailMesssage = 'Invalid email format.';
      return; // Prevent further processing if email is invalid
    }


    // if (this.addPayment.firstName.length > 8) {
    //   this.fistNae = true;
    //   // this.emailMesssage = 'Invalid email format.';
    //   return; // Prevent further processing if email is invalid
    // }
 this.sucessMessage = true;
   this.paymentSubscription = this.zaxosServices.addPaymets(this.addPayment).subscribe({
      next:(res) => {
        console.log(res)
        this.emailMessage = false;
       
          setTimeout(() => {
     this.route.navigateByUrl('/paymentlist')
    }, 3000); 
        
      },
    })
  }

}
