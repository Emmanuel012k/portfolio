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
import { StartUpComponent } from './components/start-up/start-up.component';
import {MatSelectModule} from '@angular/material/select';
 import {MatBadgeModule} from '@angular/material/badge';
import {MatRadioModule} from '@angular/material/radio';
import { PaymentComponent } from './components/payments/payment/payment.component';
import { PaymentsListComponent } from './components/payments/payments-list/payments-list.component';
import { EditPaymentComponent } from './components/payments/edit-payment/edit-payment.component';
import { HotelsListComponent } from './components/venues-bars/hotels-list/hotels-list.component';
// import { AgmCoreModule } from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { HotelDetailsComponent } from './components/venues-bars/hotel-details/hotel-details.component';
import { ChildComponent } from './components/Data-Pass/child/child.component';
import { ParentComponent } from './components/Data-Pass/parent/parent.component';
import { MenuComponent } from './components/about-hotels/menu/menu.component';
// import { AgmCoreModule } from '@angular/google-maps';

 


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
   StartUpComponent,
   PaymentComponent,
   PaymentsListComponent,
   EditPaymentComponent,
   HotelsListComponent,
   HotelDetailsComponent,
   ChildComponent,
   ParentComponent,
   MenuComponent,     
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
    MatTabsModule,
    MatSelectModule,
    MatBadgeModule,
    MatRadioModule,
    GoogleMapsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
