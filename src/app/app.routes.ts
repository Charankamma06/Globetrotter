import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { BookingComponent } from './booking/booking.component';
import { RegisterComponent } from './registration/registration.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'registration', component: RegisterComponent  },
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }