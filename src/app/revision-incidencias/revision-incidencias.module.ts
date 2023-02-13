import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionIncidenciasRoutingModule } from './revision-incidencias-routing.module';
import { RevisionIncidenciasComponent } from './revision-incidencias.component';
import { ListaIncidenciasComponent } from './lista-incidencias/lista-incidencias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    RevisionIncidenciasComponent,
    ListaIncidenciasComponent
  ],
  imports: [
    CommonModule,
    RevisionIncidenciasRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class RevisionIncidenciasModule { }
