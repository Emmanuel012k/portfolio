import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';
import { ZaxosService } from 'src/app/services/zaxos.service';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
   
  //  empForm: FormGroup;
  // subscription$:Subscription
   
   users:string = '';

  employee:EmployeeModel = {
    firstName:'',
    lastName:'',    
    company:'',    
    experience:0,
    package:0,
    skills:'',
    education:''
  }

  education: string[] = [
     'Matric',
    'Intermediate',
    'Diploma',
    'Graduate',
    'Mca',
    'Mba',
    'Post Graduate'
  ]

  // skills:string[] = [
  //   'Flutter',
  //   'Angular',
  //   'Figma',
  //   '.Net',
  //   'Astro',
  //   'React Js',
  //   'Adobe'
  // ]

  constructor(private empService:ZaxosService ){

  }

  ngOnInit(): void {
    // this.getUserss()
  }

  addEmployee(){
    this.empService.addEmployees(this.employee).subscribe({
      next:(response) => {
         console.log(response);
         alert('helo');
      },
    })
  }

  getUserss(){
    this.empService.getEmployees().subscribe({
      next:(response) => {
         console.log(response)
         console.log('jgfhjg')
      },
    })
  }

}
