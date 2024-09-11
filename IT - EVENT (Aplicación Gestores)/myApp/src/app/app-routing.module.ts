import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule) 

  },

  { path: '', redirectTo: 'auth', pathMatch: 'full'

   },
   
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule)

   },

  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule) },
  {
    path: 'registrar-actividad',
    loadChildren: () => import('./registrar-actividad/registrar-actividad.module').then( m => m.RegistrarActividadPageModule)
  },
  {
    path: 'registrar-seminario',
    loadChildren: () => import('./registrar-seminario/registrar-seminario.module').then( m => m.RegistrarSeminarioPageModule)
  },
  {
    path: 'registrar-evento',
    loadChildren: () => import('./registrar-evento/registrar-evento.module').then( m => m.RegistrarEventoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
