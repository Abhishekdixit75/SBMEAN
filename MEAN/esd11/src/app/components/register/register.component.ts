import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
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
