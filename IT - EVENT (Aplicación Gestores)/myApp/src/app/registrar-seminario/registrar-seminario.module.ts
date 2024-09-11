import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarSeminarioPageRoutingModule } from './registrar-seminario-routing.module';

import { RegistrarSeminarioPage } from './registrar-seminario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarSeminarioPageRoutingModule
  ],
  declarations: [RegistrarSeminarioPage]
})
export class RegistrarSeminarioPageModule {}
