import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar-seminario',
  templateUrl: './registrar-seminario.page.html',
  styleUrls: ['./registrar-seminario.page.scss'],
})
export class RegistrarSeminarioPage {
  seminario = {
    titulo: '',
    descripcion: ''
  };

  constructor(private alertController: AlertController) {}

  async onSubmit() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Seminario registrado con éxito',
      buttons: ['OK']
    });
    await alert.present();
  }
}
