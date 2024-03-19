import { Component, Inject, OnInit } from '@angular/core';
import { UserModel } from '../../models/login.model';
import { ZaxosService } from 'src/app/services/zaxos.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { LoginComponent } from '../../Login/login/login.component';
import { RegisterComponent } from '../../Login/register/register.component';
import { EmployeeComponent } from '../../employees/employee/employee.component';
import { EmployeeModel } from '../../models/employee.model';
import { UpdateEmployeeComponent } from '../../employees/update-employee/update-employee.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
   getUser:EmployeeModel[] = [];

   constructor (private repoService:ZaxosService,       
    public dialog: MatDialog
    ){} 

   ngOnInit(): void {
     this.getUserList();
    //  console.log(this.getUserList);
   }
    
 

   

   getUserList(){
    this.repoService.getEmployees().subscribe({
       next:(reponse) => {
         console.log(reponse);
         this.getUser = reponse;
       },
    })
   }


   longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  
openAddEditEmpForm(){
    this.dialog.open(EmployeeComponent,{
      // width:'200px',

    })
  }


  onUpdateUser(){
    this.dialog.open(UpdateEmployeeComponent,{

    })
  }
 


  
   

}

