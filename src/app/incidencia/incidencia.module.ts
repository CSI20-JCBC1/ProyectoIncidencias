import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidenciaRoutingModule } from './incidencia-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncidenciaComponent } from './incidencia/incidencia.component';


@NgModule({
  declarations: [
    IncidenciaComponent
  ],
  imports: [
    CommonModule,
    IncidenciaRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class IncidenciaModule { }
