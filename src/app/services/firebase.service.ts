import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor( private afb:
    AngularFirestore) { }

  getAll(coleccion:string){
    return this.afb.collection(coleccion).snapshotChanges();
  }
  getOne(coleccion:string, documentId: string){
    return this.afb.collection(coleccion).doc(documentId).snapshotChanges();
  }

  update(coleccion:string, documentId: string, data : any){
    return this.afb.collection(coleccion).doc(documentId).update(data);
  }

  create(coleccion:string, data : any){
    return this.afb.collection(coleccion).add(data);
  }
  delete(coleccion:string, documentId: string){
    return this.afb.collection(coleccion).doc(documentId).delete();
  }

  estadoIncidencia(coleccion: string,estado: boolean){
    return this.afb.collection(coleccion, ref => ref.where('revisada', '==', estado)).snapshotChanges();
  }
}