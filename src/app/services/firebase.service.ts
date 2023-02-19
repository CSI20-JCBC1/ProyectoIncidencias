import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Auth, createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  

  constructor(private afb: AngularFirestore, private auth: Auth) { }
 

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }

  CrearUsuario(data: any) {
    return this.afb.collection("usuarios").add(data);
  }


  userRol(email: string) {
    console.log(this.afb.collection('usuarios', ref => ref.where("email", "==", email)).snapshotChanges());
    return this.afb.collection('usuarios', ref => ref.where("email", "==", email)).snapshotChanges()
  }

  userEmail(){
    const usuario = this.auth.currentUser;
    return usuario?.email?.toString();
  }

  getAll(coleccion: string) {
    return this.afb.collection(coleccion).snapshotChanges();
  }
  getOne(coleccion: string, documentId: string) {
    return this.afb.collection(coleccion).doc(documentId).snapshotChanges();
  }

  update(coleccion: string, documentId: string, data: any) {
    return this.afb.collection(coleccion).doc(documentId).update(data);
  }

  create(coleccion: string, data: any) {
    return this.afb.collection(coleccion).add(data);
  }
  delete(coleccion: string, documentId: string) {
    return this.afb.collection(coleccion).doc(documentId).delete();
  }

  estadoIncidencia(coleccion: string, estado: boolean) {
    return this.afb.collection(coleccion, ref => ref.where('revisada', '==', estado)).snapshotChanges();
  }
}