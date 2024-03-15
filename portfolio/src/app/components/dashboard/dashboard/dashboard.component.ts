import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/login.model';
import { ZaxosService } from 'src/app/services/zaxos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
   getUser:UserModel[] = [];

   constructor (private repoService:ZaxosService){} 

   ngOnInit(): void {
     this.getUserList();
    //  console.log(this.getUserList);
   }

   getUserList(){
    this.repoService.getUsers().subscribe({
       next:(reponse) => {
         console.log(reponse);
         this.getUser = reponse;
       },
    })
   }


   longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  
}
