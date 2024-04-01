import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

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

// parentArray: string[] = ['Apple', 'Banana', 'Orange'];
}
