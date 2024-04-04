import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ImageUrl } from '../../models/image.mode';
import { MatDialog } from '@angular/material/dialog';
import { PayOptionsComponent } from '../pay-options/pay-options.component';

 
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
    model:ImageUrl
    today = new Date(); // Get the current date

   

  constructor(private http: HttpClient, private dailog:MatDialog) {
    this.model = {
      imageUrl:''
    }
   }

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

   
    openDialog() {
    const dialogRef = this.dailog.open(PayOptionsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

  


