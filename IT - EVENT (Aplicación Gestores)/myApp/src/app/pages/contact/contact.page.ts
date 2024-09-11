import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; /* BIBLIOTECA PARA ALERTA DEL BOTON*/
import { Router } from '@angular/router'; /* ESTE IMPORT NOS SIRVE PARA NAVEGAR*/

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  //Definimos los parametros vinculados a [(ngModel)] 
  nom:string="";
  apellido:string="";
  rut:string="";
  email:string="";
  comentario:string="";

  constructor(private alertcontroller: AlertController, /* Se implementa la alerta en el constructor */
              private router: Router) { } 

  ngOnInit() {
  }

  async mensaje(){ /* PERSONALIZAR EL MENSAJE CON ASYNC */

    const alert = await this.alertcontroller.create({ /* TODO ESTO ES LA ALERTA DEL BOTON*/
      header: 'Contacto',
      mode:'ios',
      message: 'Gracias por contactarte con nosotros! ' +this.email,
      buttons: [
  
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Envío de datos');
            console.log('this.comentario'); //permite ver en la consola el comentario
            this.limpiar();
            this.router.navigate(['/inicio']); //Permite navegar hacia otro page 
          },
        },
      ],
    });

    await alert.present();
    }//FINDEMETODO
    limpiar(){
      this.nom="";
      this.apellido="";
      this.rut="";
      this.comentario="";

    }
  }

