import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-revision-incidencias',
  templateUrl: './revision-incidencias.component.html',
  styleUrls: ['./revision-incidencias.component.css']
})
export class RevisionIncidenciasComponent implements OnInit {
  //Propiedades
  documentId?: any;
  incidencia: any;
  
  
  //Formulario reactivo
  incidenciaForm = this.fb.group({
    persona: [''],
    lugar: [''],
    descripcion: [''],
    fecha: [''],
    estado: [null , Validators.required],
    solucion: [null],
    revisada: [false],
  });
  
  constructor(
    private firebase: FirebaseService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location
  ) {}
  
  ngOnInit(): void {
  
    this.documentId = this.route.snapshot.paramMap.get("documentId");
    this.firebase.getOne("incidencias",this.documentId).subscribe((resp) => {
      this.incidencia = resp.payload.data();
      this.incidenciaForm.setValue(this.incidencia);
    });
  }
  
  actualizarEstado(){
    this.incidencia = this.incidenciaForm.value;
  
    if (this.incidenciaForm.valid) {
      
      this.firebase.update("incidencias",this.documentId, this.incidencia).then(
        () => {
          alert("Registro actualizado");
        },
        (error) => {
          alert("¡A ocurrido un error!");
          console.log(error);
        }
      );
  
    }else{
      this.incidenciaForm.reset();
      alert("Complete los campos");
    }
  }
  
  goBack(): void {
    this.location.back();
  }
  
  
  }
  