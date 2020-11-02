import { Injectable } from '@angular/core';
import { UserI } from 'src/app/shared/interfaces/UserI';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  baseref = firebase.database().ref('items');
  idUsuario='';
  constructor() { }

  PullRegister(){
    // console.log("PullRegister");
    let users = [];
    this.baseref.on('child_added', snapshot => {
      users.push(snapshot.val());
    });
    return users;
  }
  
  update(Email:string, Numero: string){
    if(Email=="" && Numero==""){
      alert("Debes ingresar al menos un dato para agregar el contacto");
    }else{
      const user=window.localStorage.getItem('user').split('","');
      let activeuser:UserI;
      let insertuser:UserI;
      this.baseref.on('child_added', snapshot => {
        if(user[0].includes(snapshot.val().email) || user[0].includes(snapshot.val().telefono)){
          this.idUsuario=snapshot.ref.key;
          activeuser=snapshot.val();
        }
        if(snapshot.val().email==Email || snapshot.val().telefono==Numero){
          insertuser=snapshot.val();
        }
      });
      console.log("Usuario: "+user);
      console.log("Llave: "+this.idUsuario);
      if(activeuser==insertuser || activeuser.contactos.includes(insertuser.email)){
        alert("No puedes repetir contactos ni agregarte a ti mismo");
      }else{
        activeuser.contactos[activeuser.contactos.length]=insertuser.email;
        this.baseref.child(this.idUsuario).update(activeuser);
        alert("Contacto agregado");
      }  
    }
  }
}
