import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { ControlAccesoComponent } from './control-acceso.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

const routes: Routes = [{ path: '', component: ListaUsuariosComponent , ...canActivate(() => redirectUnauthorizedTo(['/register']))},
{ path: 'controlAcceso/:documentId', component: ControlAccesoComponent,...canActivate(() => redirectUnauthorizedTo(['/register']))}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlAccesoRoutingModule { }
