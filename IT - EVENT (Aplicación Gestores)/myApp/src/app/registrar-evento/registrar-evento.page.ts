import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar-evento',
  templateUrl: './registrar-evento.page.html',
  styleUrls: ['./registrar-evento.page.scss'],
})
export class RegistrarEventoPage {
  evento = {
    nombre: '',
    descripcion: ''
  };

  constructor(private alertController: AlertController) {}

  async onSubmit() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Evento registrado con éxito',
      buttons: ['OK']
    });
    await alert.present();
  }
}
