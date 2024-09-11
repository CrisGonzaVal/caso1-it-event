import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {
  segment = 'login';
  login = { email: '', password: '' };
  register = { name: '', email: '', password: '' };
  forgot = { email: '' };

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  segmentChanged(event: any) {
    this.segment = event.detail.value;
  }

  async loginUser() {
    const { email, password } = this.login;
    const isAuthenticated = this.authService.login(email, password);
    
    if (isAuthenticated) {
      this.router.navigateByUrl('/inicio');
    } else {
      await this.showAlert('Error', 'Las credenciales son incorrectas.');
    }
  }

  async registerUser() {
    const { name, email, password } = this.register;
    const isRegistered = this.authService.register(name, email, password);
    
    if (isRegistered) {
      await this.showAlert('Éxito', 'Te has registrado correctamente.');
    } else {
      await this.showAlert('Error', 'Hubo un problema al registrar tu cuenta.');
    }
  }

  async recoverPassword() {
    const { email } = this.forgot;
    const isRecovered = this.authService.recoverPassword(email);
    
    if (isRecovered) {
      await this.showAlert('Éxito', 'Te hemos enviado el correo de recuperación de cuenta, revisa tu correo!');
    } else {
      await this.showAlert('Error', 'Hubo un problema al enviar el correo de recuperación.');
    }
  }

  async logoutUser() {
    this.authService.logout();
    await this.showAlert('Éxito', 'Haz cerrado sesión exitosamente, ¡nos vemos pronto!');
    this.router.navigateByUrl('/login'); // Redirige a la página de inicio de sesión o la página deseada
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
