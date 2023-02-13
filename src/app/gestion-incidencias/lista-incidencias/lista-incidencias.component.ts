import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista-incidencias',
  templateUrl: './lista-incidencias.component.html',
  styleUrls: ['./lista-incidencias.component.css']
})
export class ListaIncidenciasComponent implements OnInit {

  listaIncidencias: any[] = [];

  constructor(private firebase: FirebaseService, private location: Location) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){ 
    this.firebase.getAll("incidencias").subscribe((incidenciasSnapshot: any) => {
      incidenciasSnapshot.forEach((incidenciaData:any) => {

        this.listaIncidencias.push({
          id: incidenciaData.payload.doc.id, 
          data: incidenciaData.payload.doc.data()
        });
        
      });
    })
  }

  goBack(): void {
    this.location.back();
  }
  
  


}
