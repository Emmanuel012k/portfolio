import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-options',
  templateUrl: './pay-options.component.html',
  styleUrls: ['./pay-options.component.css']
})
export class PayOptionsComponent implements OnInit{
  @Input() dataArray: any[];
   increments:number = 0
   count = 0

  ngOnInit(): void {     
  }
   
  Dates: string[] = [
    
   
    
    
    
    
    
    
   ]
   
  
  parentArray = [
    {
      today: 'Today',
      monday:  'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      tursday: 'Thursday',
      friday: 'Friday',
      sat: 'Saturday',
      sun: 'Sunday',
      
    },

    {
      dates: '04-Apr',
      next:  '05-Apr',
      tom: '06-Apr',
      sunto: '09-Apr',      
    }
   ]
 
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

