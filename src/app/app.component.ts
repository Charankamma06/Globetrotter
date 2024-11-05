import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './contactus/contactus.component';
import { RegisterComponent } from './registration/registration.component';
import { DestinationService } from './destination.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AboutUsComponent,RegisterComponent, BookingComponent, ContactUsComponent, HomeComponent,RouterOutlet,RouterLink,FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'ecom-app';
  backgroundImageUrl = '';
  currentContent: string = 'home';

  showContent(content: string) {
    this.currentContent = content;
}
}