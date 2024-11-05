
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Destination {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private destinations: Destination[] = [];
  private destinationSubject = new BehaviorSubject<Destination[]>(this.destinations);

  getDestinations() {
    return this.destinationSubject.asObservable();
  }

  addDestination(destination: Destination) {
    destination.id = Date.now();
    this.destinations.push(destination);
    this.destinationSubject.next(this.destinations);
  }

  updateDestination(id: number, updatedDestination: Destination) {
    const index = this.destinations.findIndex(dest => dest.id === id);
    if (index !== -1) {
      this.destinations[index] = { ...updatedDestination, id };
      this.destinationSubject.next(this.destinations);
    }
  }

  deleteDestination(id: number) {
    this.destinations = this.destinations.filter(dest => dest.id !== id);
    this.destinationSubject.next(this.destinations);
  }
}
