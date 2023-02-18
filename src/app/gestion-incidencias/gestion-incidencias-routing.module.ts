import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaIncidenciasComponent } from './lista-incidencias/lista-incidencias.component';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [{ path: '', component: ListaIncidenciasComponent, ...canActivate(() => redirectUnauthorizedTo(['/register']))},
{ path: 'gestionIncidencias/:documentId', component: GestionIncidenciasComponent,...canActivate(() => redirectUnauthorizedTo(['/register']))}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionIncidenciasRoutingModule { }
