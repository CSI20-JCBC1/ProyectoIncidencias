import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionIncidenciasRoutingModule } from './gestion-incidencias-routing.module';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListaIncidenciasComponent } from './lista-incidencias/lista-incidencias.component';


@NgModule({
  declarations: [
    GestionIncidenciasComponent,
    ListaIncidenciasComponent
  ],
  imports: [
    CommonModule,
    GestionIncidenciasRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GestionIncidenciasModule { }
