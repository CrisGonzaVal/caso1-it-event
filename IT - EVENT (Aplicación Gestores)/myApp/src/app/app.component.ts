import { Component } from '@angular/core';

interface Opciones{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  /*Opciones del menú*/
  opciones:Opciones[]=[
    {
      icon:'body-outline',
      name: 'Mi perfil',
      redirecTo:'/alert'
    },
    {
      icon:'qr-code-outline',
      name: 'Scan QR',
      redirecTo:'/card'
    },
    {
      icon:'car-sport-outline',
      name: 'Contactanos!',
      redirecTo:'/contact'
    },

  ]

  constructor() {}
}
