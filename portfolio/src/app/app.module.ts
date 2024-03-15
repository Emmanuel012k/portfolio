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

import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatDividerModule} from '@angular/material/divider';
 

 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   LoginComponent,
   RegisterComponent,
   DashboardComponent,
    
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
    MatDividerModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
