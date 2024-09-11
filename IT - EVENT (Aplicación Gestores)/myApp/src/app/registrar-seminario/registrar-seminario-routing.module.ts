import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarSeminarioPage } from './registrar-seminario.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarSeminarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarSeminarioPageRoutingModule {}
