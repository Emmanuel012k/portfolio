import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Login/login/login.component';
import { RegisterComponent } from './components/Login/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { JobListingsComponent } from './components/jobs/job-listings/job-listings.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'job-listings', component:JobListingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
