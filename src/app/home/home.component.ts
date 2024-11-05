import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormsModule,FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { DestinationService } from '../destination.service';



@Component({
  selector: 'app-home',
   standalone:true,
  imports: [FormsModule,CommonModule,FontAwesomeModule ,],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {
  faStar = faStar;


  searchTerm: string = '';

  destinations = [
    {
      name: 'Paris',
      imageUrl: 'assets/Paris.jpg',
      description: 'The City of Light,It is  known for its cultural landmarks.' ,
      rating:5,
      category: 'Cultural' , 
      cost:200000
    },
    {
      name: 'Swiss Alps',
      imageUrl: 'assets/Swiss Alps.jpg',
      description: 'A paradise for adventure lovers, offering hiking and skiing.', 
      rating:4,
      category: 'Adventure' , 
      cost:100000
    },
    {
      name: 'Great Barrier Reef',
      imageUrl: 'assets/Great Barrier Reef.jpg',
      description: 'The reef, which is large enough to be visible from space' ,
      rating:4,
      category: 'Nature' , 
      cost:300000
    },
    {
      name: 'Disney World',
      imageUrl: 'assets/Disney World.jpg',
      description: 'The most fascinating and the best Disneyland in the world is in Florida, USA.',
      rating:4,
      category: 'Family Travel' , 
      cost:200000
    },
    {
      name: 'Bali',
      imageUrl: 'assets/Bali.jpg',
      description: 'Tourists love Bali for its pristine beaches, scuba diving, Balinese cuisine',
      rating:3,
      category: 'Nature' , 
      cost:100000
    },
    {
      name: 'Maldives',
      imageUrl: 'assets/Maldives.jpg',
      description: 'Escape to the turquoise paradise of the Maldives.Enjoy nature.',
      rating:4.75,
      category: 'Nature' , 
      cost:200000
    },
    {
      name: 'London',
      imageUrl: 'assets/London.jpg',
      description: 'The heritage of England.London stands as the heart of England, a vibrant mosaic of history & culture.',
      rating:4,
      category: 'Cultural' , 
      cost:300000
    },
    {
      name: 'Galápagos Islands',
      imageUrl: 'assets/island.jpg',
      description: 'The Galápagos Islands is a volcanic archipelago in the Pacific Ocean.' ,
      rating:3,
      category: 'Nature' , 
      cost:300000
    },
    {
      name: 'Bora Bora',
      imageUrl: 'assets/Bora Bora.jpg',
      description: 'Bora Bora is a South Pacific island northwest of Tahiti in French Surrounded by sand-fringed motus.',
      rating:4,
      category: 'Nature' , 
      cost:100000
    },
    {
      name: 'Hanoi',
      imageUrl: 'assets/Hanoi.jpg',
      description: 'Hanoi,the capital of Vietnam,known for rich culture with Southeast Asian,Chinese and French influences.',
      rating:4,
      category: 'Cultural' , 
      cost:200000
    },
    {
      name: 'Machu Picchu',
      imageUrl: 'assets/Machu Picchu.jpg',
      description: 'Trek the Salkantay Route to Machu Picchu. The younger, cooler sister of the over-crowded Inca Trail.',
      rating:3,
      category: 'Adventure' , 
      cost:200000
    },
    {
      name: 'Thailand',
      imageUrl: 'assets/Thailand.jpg',
      description: 'Thailand on your personal map if you are looking for one of the best adventure trips in the world. ',
      rating:4,
      category: 'Adventure' , 
      cost:200000
    },

  ];


  get filteredDestinations() {
  
    if (this.searchTerm) {
      return this.destinations.filter(destination =>
        destination.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    
    return this.destinations;
  }
  bookTicket(destination: any) {
    alert(`Booking tickets for ${destination.name}`);

  }
  stars(rating: number) {
    return Array(5).fill(0).map((x, i) => i + 1);
  }



}
 