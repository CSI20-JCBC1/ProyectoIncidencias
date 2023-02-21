import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  

  constructor(
    private firebase: FirebaseService,
    private router: Router,
    private fb:FormBuilder,
    private afAuth: AngularFireAuth,
  ) { }
  

  formReg = this.fb.group({
    email: [],
    password: [],
    rol: [2],
  });

  

  registroUsuario(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('Registro completado');
        console.log(result.user);
        this.firebase.crearUsuario(this.formReg.value)
        this.router.navigate(["/login"])
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
