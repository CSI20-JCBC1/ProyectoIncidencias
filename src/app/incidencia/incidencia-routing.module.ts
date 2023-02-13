import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidenciaComponent } from './incidencia/incidencia.component';

const routes: Routes = [
  { path: "crear", component: IncidenciaComponent },
  { path: "**", redirectTo: "crear", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidenciaRoutingModule { }