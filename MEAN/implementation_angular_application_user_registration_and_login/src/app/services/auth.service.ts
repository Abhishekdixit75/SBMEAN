// About: In-memory auth service with register and login helpers.
// Run: Use Angular CLI (`ng serve`) from the project root.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: { name: string; email: string; password: string }[] = [];

  register(name: string, email: string, password: string): boolean {
    const exists = this.users.some(user => user.email === email);
    if (exists) {
      return false;
    }

    this.users.push({ name, email, password });
    return true;
  }

  login(email: string, password: string): boolean {
    return this.users.some(user => user.email === email && user.password === password);
  }
}
