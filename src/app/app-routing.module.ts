import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: 'crear', loadChildren:() => import('./incidencia/incidencia.module').then(m=>m.IncidenciaModule)
  },
  { path: "menu", component: MenuComponent },
  { path: 'revisionIncidencias', loadChildren: () => import('./revision-incidencias/revision-incidencias.module').then(m => m.RevisionIncidenciasModule) }, 
  { path: 'gestionIncidencias', loadChildren: () => import('./gestion-incidencias/gestion-incidencias.module').then(m => m.GestionIncidenciasModule) },
  {
    path: '**', redirectTo:'menu', pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
