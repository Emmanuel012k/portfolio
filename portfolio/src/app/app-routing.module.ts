import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Login/login/login.component';
import { RegisterComponent } from './components/Login/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { JobListingsComponent } from './components/jobs/job-listings/job-listings.component';
import { StartUpComponent } from './components/start-up/start-up.component';
import { PaymentComponent } from './components/payments/payment/payment.component';
import { PaymentsListComponent } from './components/payments/payments-list/payments-list.component';
import { EditPaymentComponent } from './components/payments/edit-payment/edit-payment.component';
import { HotelsListComponent } from './components/venues-bars/hotels-list/hotels-list.component';
import { HotelDetailsComponent } from './components/venues-bars/hotel-details/hotel-details.component';
import { ParentComponent } from './components/Data-Pass/parent/parent.component';
import { MenuComponent } from './components/about-hotels/menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  {path:"login", component:LoginComponent},
    {path:"startup", component:StartUpComponent},
  {path:"register", component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'payment', component:PaymentComponent},
  {path:'job-listings', component:JobListingsComponent},
  {path:'paymentlist', component:PaymentsListComponent},
  {path:'editpayment/:id', component:EditPaymentComponent},
  {path:'bars-pubs', component:HotelsListComponent},
  {path:'hotel-details', component:HotelDetailsComponent},
  {path:'parent', component:ParentComponent},
  {path:'menu', component:MenuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
