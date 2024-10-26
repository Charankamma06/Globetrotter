import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { BookingComponent } from './booking/booking.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'booking', component: BookingComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];