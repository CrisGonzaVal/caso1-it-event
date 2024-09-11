// src/app/pages/inicio/inicio.page.ts
import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private menucontroller: MenuController,
    private alertcontroller: AlertController,
    private router: Router,
    private authService: AuthService // Inyecta el servicio aquí
  ) { }

  ngOnInit() {}

  mostrarMenu() {
    this.menucontroller.open('first');
  }

  async mensaje() {
    const alert = await this.alertcontroller.create({
      header: 'Bienvenid@ a mi App IOS!!!',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('El usuario ha cancelado la acción');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('El usuario ha confirmado el ingreso');
            this.router.navigate(['/alert']);
          },
        },
      ],
    });
    await alert.present();
  }

  async logoutUser() {
    this.authService.logout();
    const alert = await this.alertcontroller.create({
      header: 'Éxito',
      message: 'Haz cerrado sesión exitosamente, ¡nos vemos pronto!',
      buttons: ['OK']
    });
    await alert.present();
    this.router.navigateByUrl('/auth'); // Redirige al login o página de autenticación
  }

  // Métodos para redireccionar a las páginas de registro
  registrarActividad() {
    this.router.navigate(['/registrar-actividad']);
  }

  registrarSeminario() {
    this.router.navigate(['/registrar-seminario']);
  }

  registrarEvento() {
    this.router.navigate(['/registrar-evento']);
  }
}
