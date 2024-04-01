import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  @Input() dataArray: any[];
  ngOnInit(): void {
     
  }
   

  
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

  
}
