import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlAccesoRoutingModule } from './control-acceso-routing.module';
import { ControlAccesoComponent } from './control-acceso.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ControlAccesoComponent,
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    ControlAccesoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ControlAccesoModule { }
