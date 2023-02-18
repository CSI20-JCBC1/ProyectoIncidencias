import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const routes: Routes = [
  {
    path: 'crear', loadChildren:() => import('./incidencia/incidencia.module').then(m=>m.IncidenciaModule),  ...canActivate(() => redirectUnauthorizedTo(['/register']))
  },
  { path: "menu", component: MenuComponent, ...canActivate(() => redirectUnauthorizedTo(['/register']))},
  { path: 'revisionIncidencias', loadChildren: () => import('./revision-incidencias/revision-incidencias.module').then(m => m.RevisionIncidenciasModule),  ...canActivate(() => redirectUnauthorizedTo(['/register'])) }, 
  { path: 'gestionIncidencias', loadChildren: () => import('./gestion-incidencias/gestion-incidencias.module').then(m => m.GestionIncidenciasModule), ...canActivate(() => redirectUnauthorizedTo(['/register'])) },
  {
    path: 'register', loadChildren: () =>
  import('./register/register.module').then(m=>m.RegisterModule)
  },
  {
    path: 'login', loadChildren: () =>
  import('./login/login.module').then(m=>m.LoginModule)
  },
  { path: 'controlAcceso', loadChildren: () => import('./control-acceso/control-acceso.module').then(m => m.ControlAccesoModule),...canActivate(() => redirectUnauthorizedTo(['/register'])) },
  {
    path: '**', redirectTo:'menu', pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
