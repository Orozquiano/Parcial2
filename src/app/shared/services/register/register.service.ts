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
    console.log("PullRegister");
    let users = [];
    this.baseref.on('child_added', snapshot => {
      users.push(snapshot.val());
      
      //console.log("pushed an item: "+snapshot.val().password);
    });
    //console.log("registers: "+users.length);
    return users;
  }
  update(Email:string){
    const user=window.localStorage.getItem('user').split('","');
    let activeuser:UserI;
    this.baseref.on('child_added', snapshot => {
      if(user[0].includes(snapshot.val().email) || user[0].includes(snapshot.val().telefono)){
        this.idUsuario=snapshot.ref.key;
        activeuser=snapshot.val();
      }
      
      //console.log("pushed an item: "+snapshot.val().password);
    });
    console.log("Usuario: "+user);
    
    console.log("Llave: "+this.idUsuario);
    activeuser.contactos[activeuser.contactos.length]=Email;
    
    this.baseref.child(this.idUsuario).update(activeuser);

    
  }
}
