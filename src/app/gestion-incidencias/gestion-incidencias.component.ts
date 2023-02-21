import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gestion-incidencias',
  templateUrl: './gestion-incidencias.component.html',
  styleUrls: ['./gestion-incidencias.component.css']
})
export class GestionIncidenciasComponent implements OnInit {
  //Propiedades
  documentId?: any;
  incidencia: any;
  correo: any = this.firebase.emailUsuarioLogueado();
  usuarios: any[] = [];



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
    private location: Location,
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
          alert("Incidencia actualizada con exito");
        },
        (error) => {
          alert("Error");
          console.log(error);
        }
      );
  
    }else{
      this.incidenciaForm.reset();
      alert("Complete los campos");
    }
  }

  deleteIncidencia(){
    this.firebase.delete('incidencias', this.documentId).then(
      () => {
        alert("Incidencia borrada con exito");
        this.goBack();
      },
      (error) => {
        alert("Error");
        console.log(error);
      }
    );
    
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
  

  goBack(): void {
    this.location.back();
  }

  
  
}
