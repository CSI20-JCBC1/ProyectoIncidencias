import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  fontStyle?: string = ' ';

  constructor(private firebase: FirebaseService, private location:Location) { }

  ngOnInit(): void {
    this.getAll();
    this.getAllRevisadas();
    this.getAllNoRevisadas();
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

  goBack(): void {
    this.location.back();
  }

}
