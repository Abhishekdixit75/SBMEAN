// About: Registration form component that stores users via AuthService.
// Run: Use Angular CLI (`ng serve`) from the project root.

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: false
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService) {}

  onRegister(): void {
    const ok = this.authService.register(this.name, this.email, this.password);
    this.message = ok ? 'Registration successful.' : 'Email already exists.';
  }
}
