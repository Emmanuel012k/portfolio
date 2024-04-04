import { Component, Input, OnInit } from '@angular/core';
import { HotelsListComponent } from '../hotels-list/hotels-list.component';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit{
  @Input() dataArray: any[];
   increments:number = 0
   count = 0

  ngOnInit(): void {     
  }
   
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

  display : any;
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;

  moveMap(event: google.maps.MapMouseEvent) {
    if(event.latLng!= null)
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.display = event.latLng.toJSON();
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
