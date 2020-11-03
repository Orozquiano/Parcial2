import { Injectable } from '@angular/core';
import { UserI } from '../interfaces/UserI';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import 'firebase/firestore';
import{ map } from 'rxjs/operators';
export interface Item {name: string, lname: string, telefono: string, email:string, password:string, username:string}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(){}
  user: UserI | undefined;


  login(user: UserI, lista: Array<UserI>) {
    let existe=false;
    let posicion=-1;
    for(let i=0;i<lista.length;i++){
      if(user.email === lista[i].email || user.telefono === lista[i].telefono){
        existe=true;
        posicion=i;
      }
    }
    if(existe){
      if(user.password === lista[posicion].password){
        this.user = user;
        // window.localStorage.setItem('user', JSON.stringify(this.user));
        window.localStorage.setItem('user', JSON.stringify(this.user));
      }else{
        alert("La contraseña o el usuario que ingresaste son incorrectos.");
      }
    }else{
      alert("El usuario que ingreso no se encuentra registrado.");
    }
  }

  isLogged() {
    const user = window.localStorage.getItem('user') || undefined;
    const isLogged = user ? true : false;
    if (isLogged) this.user = JSON.parse(user);
    return isLogged;
  }

  logout() {
    window.localStorage.clear();
    window.location.href = '';
  }


}

