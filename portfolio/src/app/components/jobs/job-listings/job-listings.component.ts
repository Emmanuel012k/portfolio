import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent implements OnInit{
  
   jobs:any[]= [];  


  ngOnInit(): void {
    this.jobs = [
     {title:'web developer',
      image:'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       experience: 2.4,
        salary: 3.4,
        present:'hiring',
         location: 'mumbai',
          responsbilities: 'Develop web pages using modern technologies such as HTML5, CSS3, SCSS, CSS frameworks, Typescript' },
     
    ]
  }

}

