// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login(email: string, password: string): boolean {
    return email === '' && password === '';
  }

  register(name: string, email: string, password: string): boolean {
    console.log('Registro:', { name, email, password });
    return true;
  }

  recoverPassword(email: string): boolean {
    console.log('Recuperar contraseña para:', email);
    return true;
  }

  logout(): void {
    console.log('Cerrando sesión');
  }
}
