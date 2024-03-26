import { Component, OnInit } from '@angular/core';
import { Payment } from '../../models/payments.model';
import { ZaxosService } from 'src/app/services/zaxos.service';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.css']
})
export class PaymentsListComponent implements OnInit{
  paymentsList:Payment [] = []
  loading:boolean = false;

  constructor(private httpService:ZaxosService){}

  ngOnInit(): void {
    this.getPaymentsLists()
    console.log(this.paymentsList);
  }

  getPaymentsLists(){
    this.loading = true;
    this.httpService.getPayments().subscribe({
      next:(response) => {
        console.log(response);
        this.paymentsList = response
        this.loading = false
      },
    })
  }

}
