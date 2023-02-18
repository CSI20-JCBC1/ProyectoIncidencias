import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { ListaIncidenciasComponent } from './lista-incidencias/lista-incidencias.component';
import { RevisionIncidenciasComponent } from './revision-incidencias.component';

const routes: Routes = [
  { path: '', component: ListaIncidenciasComponent,...canActivate(() => redirectUnauthorizedTo(['/register'])) },
  { path: 'revisionIncidencias/:documentId', component: RevisionIncidenciasComponent,...canActivate(() => redirectUnauthorizedTo(['/register'])) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevisionIncidenciasRoutingModule { }
