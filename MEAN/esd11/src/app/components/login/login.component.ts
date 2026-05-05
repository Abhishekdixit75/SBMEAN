import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService) {}

  onLogin(): void {
    const ok = this.authService.login(this.email, this.password);
    this.message = ok ? 'Login successful.' : 'Invalid email or password.';
  }
}
