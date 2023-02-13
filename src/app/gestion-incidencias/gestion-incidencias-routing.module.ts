import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaIncidenciasComponent } from './lista-incidencias/lista-incidencias.component';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';

const routes: Routes = [{ path: '', component: ListaIncidenciasComponent },
{ path: 'gestionIncidencias/:documentId', component: GestionIncidenciasComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionIncidenciasRoutingModule { }
