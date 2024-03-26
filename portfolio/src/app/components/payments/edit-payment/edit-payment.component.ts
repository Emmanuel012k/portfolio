import { Component, OnInit } from '@angular/core';
import { ZaxosService } from 'src/app/services/zaxos.service';
import { Payment } from '../../models/payments.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { updatePayment } from '../../models/update-payment.model';

@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.css']
})
export class EditPaymentComponent implements OnInit{
     id:string | null = null; 
     payment?: Payment ;
     emailMessage:boolean = false;
     
    fistNae:boolean = false;

    private paymentSubscription?: Subscription
  constructor(private httpService:ZaxosService, private routeParam:ActivatedRoute,
    private route:Router ){}

  ngOnInit(): void {
    this.routeParam.paramMap.subscribe({
      next:(param) => {
        this.id = param.get('id');
        console.log(this.id)
          // get the data from API for this catgeory Id //
       if(this.id ){
        this.httpService.getByIdPayemnts(this.id).subscribe({
          // 
           next: (res)=>{
            this.payment = res;
            console.log(this.payment);
           }
        })
       }
      },
    })
  }


  updateSubmit(){
     if(this.id && this.payment){
        var updatePayment:updatePayment = {
          firstName:this.payment.firstName,
          email:this.payment.email,
          cardNumber:this.payment.cardNumber,
          country:this.payment.country,
          zipCode:this.payment.zipCode,
          cvv:this.payment.cvv,
        }
     

      console.log(this.payment)
      this.httpService.updatePayment(this.id, updatePayment).subscribe({
           next:(response) => {
              console.log(response)
              this.route.navigateByUrl('/paymentlist')
           },
      })

  }

 }




}
