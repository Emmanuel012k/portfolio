import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/Login/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './components/Login/register/register.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatDividerModule} from '@angular/material/divider';
import { MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { UpdateEmployeeComponent } from './components/employees/update-employee/update-employee.component';
import {MatTabsModule} from '@angular/material/tabs';
import { JobsEmployeeComponent } from './components/jobs/jobs-employee/jobs-employee.component';
import { JobListingsComponent } from './components/jobs/job-listings/job-listings.component';

 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   LoginComponent,
   RegisterComponent,
   DashboardComponent,
   EmployeeComponent,
   UpdateEmployeeComponent,
   JobsEmployeeComponent,
   JobListingsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatTabsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
