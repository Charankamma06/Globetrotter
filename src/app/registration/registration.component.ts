import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  imports: [CommonModule, FormsModule], 
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    destination: '',
  };
 
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      alert('Registration successful!');
      form.reset();
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}