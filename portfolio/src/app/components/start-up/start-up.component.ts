import { Component, HostListener, OnInit } from '@angular/core';
import { BookingShow } from '../models/bookings.model';
import { ZaxosService } from 'src/app/services/zaxos.service';

@Component({
  selector: 'app-start-up',
  templateUrl: './start-up.component.html',
  styleUrls: ['./start-up.component.css']
})
export class StartUpComponent implements OnInit{
   




   bookShow:BookingShow = {
     name:'',
    email:'',
    phone:0,
    stadiumName:'',
    no:0,
    parking: false,
    food:'',
    rooms:0,
    members:0,
    stay:'',
    // date:Date,
    price:'',
   }

   puls:number = 0
   minus:number = 0


  // DropDown select
     foods:string[] = [
      'pizza',
      'Burger',
      'Bun' 
    ]
  // DropDown End

   
  constructor(private bookings:ZaxosService) {
     
  }
 


  ngOnInit(): void {
   this.puls = 1
   this.minus = 0
    
  }


  //  property Binding
      images = {
        btnvalue: 10,
        image:"https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
  //  property Binding End

   colorBg: string = '';

   onChangeColor(color: string): void {
    this.colorBg =  color;
   }



   
     backgroundColor: string = '';

  changeBackgroundColor(color: string): void {
    if (this.backgroundColor == color) {
         this.backgroundColor = 'blue'
         console.log('blue')
    }else{
      this.backgroundColor = 'red'
      console.log('red')
    }
  }


onBookingSubmit(){
  // this.bookShow
  this.bookings.addAdminBooking(this.bookShow).subscribe({
     next:(reponse) => {
        console.log(reponse)
     },
  })
  console.log(this.bookShow);
  alert(this.bookShow + 'Alright')

}






  // Use HostListener to listen to 'click' events
  // @HostListener('click', ['$event'])
  // onClick(event: MouseEvent) {
  //   console.log('Element clicked:', event);
  // }


}
