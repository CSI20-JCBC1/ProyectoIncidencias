import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-control-acceso',
  templateUrl: './control-acceso.component.html',
  styleUrls: ['./control-acceso.component.css']
})
export class ControlAccesoComponent implements OnInit {

  documentId?: any;
  incidencia: any;
  correo: any = this.firebase.emailUsuarioLogueado();
  usuarios: any[] = [];


  //Formulario reactivo
  usuarioForm = this.fb.group({
    email: [''],
    password:[''],
    rol: ['', Validators.required],
    
  });

  constructor(
    private firebase: FirebaseService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location:Location,
    private router:Router
  ) {}

  ngOnInit(): void {

    this.documentId = this.route.snapshot.paramMap.get("documentId");
    this.firebase.getOne("usuarios",this.documentId).subscribe((resp) => {
      this.incidencia = resp.payload.data();
      this.usuarioForm.setValue(this.incidencia);
      this.rol();
    });
  }

  actualizarRol(){
    this.incidencia = this.usuarioForm.value;

    if (this.usuarioForm.valid) {
      
      this.firebase.update("usuarios",this.documentId, this.incidencia).then(
        () => {
          alert("Usuario actualizado con exito");
        },
        (error) => {
          alert("Error");
          console.log(error);
        }
      );
  
    }else{
      alert("Asegurese de que el campo del rol no está vacío o que este se encuentre entre el rango de números indicado.");
    }
  }

  deleteUser(){
    this.firebase.delete('usuarios', this.documentId).then(
      () => {
        alert("Usuario borrada con exito");
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
