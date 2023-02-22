import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista-incidencias',
  templateUrl: './lista-incidencias.component.html',
  styleUrls: ['./lista-incidencias.component.css']
})
export class ListaIncidenciasComponent implements OnInit {

  listaIncidencias: any[] = [];
  revisadas: any[] = [];
  noRevisadas: any[] = [];
  listaFiltrado?: string = ' ';
  correo: any = this.firebase.emailUsuarioLogueado();
  usuarios: any[] = [];
  

  constructor(private firebase: FirebaseService, private location:Location, private router:Router) { }

  ngOnInit(): void {
    this.getAll();
    this.getAllRevisadas();
    this.getAllNoRevisadas();
    this.rol();
  }

  getAll(){ 
    this.firebase.getAll("incidencias").subscribe((incidenciasSnapshot: any) => {
      incidenciasSnapshot.forEach((data:any) => {

        this.listaIncidencias.push({
          id: data.payload.doc.id, 
          data: data.payload.doc.data()
        });
        
      });
    })
  }

  getAllRevisadas() {
    this.firebase.estadoIncidencia("incidencias",true).subscribe((incidenciasSnapshot: any) => {
      incidenciasSnapshot.forEach((data:any) => {

        this.revisadas.push({
          id: data.payload.doc.id, 
          data: data.payload.doc.data()
        });
        
      });
    })
  }

  getAllNoRevisadas() {
    this.firebase.estadoIncidencia("incidencias",false).subscribe((incidenciasSnapshot: any) => {
      incidenciasSnapshot.forEach((data:any) => {

        this.noRevisadas.push({
          id: data.payload.doc.id, 
          data: data.payload.doc.data()
        });
        
      });
    })
  }
  rol(){
    this.firebase.usuarioLogueado(this.correo).subscribe(
      (resp: any) => {
        this.usuarios = [];

        resp.forEach((incidenciasSnapshot: any) => {
          this.usuarios.push(
            
              {...incidenciasSnapshot.payload.doc.data() }           
            
          )
        });
      })
  }

  onClick() {
    this.firebase.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

  goBack(): void {
    this.location.back();
  }

}
