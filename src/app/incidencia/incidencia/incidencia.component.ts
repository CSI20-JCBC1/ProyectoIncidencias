import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent {

   constructor(
    private fb: FormBuilder,
    private firebase: FirebaseService,
    private location: Location,
  ) {}
  
  documentId: string = '';
  correo: any = this.firebase.emailUsuarioLogueado();

  
  incidenciaForm = this.fb.group({
    persona: [this.correo],
    lugar: ['', Validators.required],
    descripcion: ['', Validators.required],
    fecha: ['', Validators.required],
    solucion: ['', Validators.required],
    estado: [null],
    revisada: [false]
  });

 

   
  crearIncidencias() {
    
      this.firebase.create("incidencias", this.incidenciaForm.value).then(
        () => {
          this.incidenciaForm.reset();
          alert("Insercion de incidencia completada");
          this.goBack()
      
        });
  }

  goBack(): void {
    this.location.back();
  }

}