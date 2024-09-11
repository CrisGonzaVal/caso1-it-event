import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar-actividad',
  templateUrl: './registrar-actividad.page.html',
  styleUrls: ['./registrar-actividad.page.scss'],
})
export class RegistrarActividadPage {
  actividad = {
    nombre: '',
    descripcion: ''
  };

  constructor(private alertController: AlertController) {}

  async onSubmit() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Actividad registrada con éxito',
      buttons: ['OK']
    });
    await alert.present();
  }
}
