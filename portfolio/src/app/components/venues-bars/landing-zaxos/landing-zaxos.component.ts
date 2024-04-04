import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-landing-zaxos',
  templateUrl: './landing-zaxos.component.html',
  styleUrls: ['./landing-zaxos.component.css']
})
export class LandingZaxosComponent {




  
  images = false; // Initial state for image visibility (optional)
  image1 = false; // Initial state for image1 visibility
   image2 = false; // Initial state for image1 visibility

    sections: { id: string, content: string }[] = [
    { id: 'book-a-table', content: 'Lunch' },
    { id: 'pay-eazy', content: 'Dinner' },
    // ... add more sections
  ];

  activeSectionId: string = '';

  handleButtonClick(sectionId: string) {
    this.activeSectionId = sectionId;
    console.log(this.activeSectionId);
  }

  showImage() {
    // Show only the selected image
    this.images = true;
    this.image1 = false;
  }

  showImage1() {
    // Show only image1
    this.images = false;
    this.image1 = true;
  }


    showImage2() {
    // Show only image1
    this.images = false;
    this.image2 = true;
  }

}
