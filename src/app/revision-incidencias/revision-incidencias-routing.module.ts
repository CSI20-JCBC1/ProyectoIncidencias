import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaIncidenciasComponent } from './lista-incidencias/lista-incidencias.component';
import { RevisionIncidenciasComponent } from './revision-incidencias.component';

const routes: Routes = [
  { path: '', component: ListaIncidenciasComponent },
  { path: 'revisionIncidencias/:documentId', component: RevisionIncidenciasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevisionIncidenciasRoutingModule { }
