import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HotelDetailsComponent } from '../hotel-details/hotel-details.component';

 

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit{
//  @Input() dataArray: any[];
     
 
  count = 0;
  cost:string = ''
countries: string[] = [
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
   
   about = [
    {title:'Discount Calculator', Bill:'sample bill', total:'2000', Youpaid:'1350'}
   ]
   
  parentArray = [
    {
      delivery: 'Home Delivery',
      alcool: 'Alcohol Served',
      smoke: 'Smoking area',
      air: 'Air Condition',
      take: 'Take-away',
      seating: 'Outdoor Seating',
      music: 'Live Music',
      parking: 'Valet Parking',
      chair: 'Wheelchair Accessible',
      sports: 'Live Sports Screening',
      kids: 'Kids Allowed',
      dance: 'Dance Floor'
    }
  ];
    
    //  parentArray: string[] = ['Apple', 'Banana', 'Orange'];

  
  ngOnInit(): void {
    this.cost = 'Cost for two 2000';
  }


  increment(){
    this.count++;
  }
  

decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }
   
   
  
}
