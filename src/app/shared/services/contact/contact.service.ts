import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { UserI } from '../../interfaces/UserI';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseref = firebase.database().ref('items');
  idUsuario = '';
  
  constructor() { }
  
  getContacts(Email: string) {
    let contacts = [];
    firebase.database().ref('items').on("child_added", snapshot => {
      if (Email == snapshot.val().email) {
        // console.log(snapshot.val().contactos);
        this.idUsuario = snapshot.ref.key;
        contacts = snapshot.val().contactos;
      }
    });
    return contacts;
  }
  getUserActive(Email: string) {
    let user: UserI;
    this.baseref.on("child_added", snapshot => {
      if (Email == snapshot.val().email) {
        // console.log(snapshot.val().contactos);
        this.idUsuario = snapshot.ref.key;
        user = snapshot.val();
      }
    });
    return user;
  }
  getContactUser(Email: string) {
    let user: UserI;
    this.baseref.on("child_added", snapshot => {
      if (Email == snapshot.val().email) {
        // console.log(snapshot.val().contactos);
        user = snapshot.val();
        return user;
      }
    });
    return user;
  }
  agregar(Email: string, Numero: string) {
    let initmessage = {
      content: "Init Chat",
      isRead: false,
      owner:"",
      isMe:true,
      time:"00:00",
      date:"2020/11/04",
      destiny:""
    };
    if (Email == "" && Numero == "") {
      alert("Debes ingresar al menos un dato para agregar el contacto");
    } else {
      const user = window.localStorage.getItem('user').split('","')[0].split('":"')[1].replace('"', "");
      let activeuser: UserI;
      let insertuser: UserI;
      this.baseref.on('child_added', snapshot => {
        if (user == snapshot.val().email || user == snapshot.val().telefono) {
          this.idUsuario = snapshot.ref.key;
          activeuser = snapshot.val();
        }
        if (snapshot.val().email == Email || snapshot.val().telefono == Numero) {
          insertuser = snapshot.val();
        }
      });
      // console.log("Usuario: "+user);
      // console.log("Llave: "+this.idUsuario);
      if (activeuser.email == insertuser.email) {
        alert("No puedes agregarte a ti mismo");
      } else {
        let repetido = false;
        activeuser.contactos.forEach(element => {
          if (element.email == insertuser.email) {
            repetido = true;
          }
        });
        if (!repetido) {
          console.log("Active: ", activeuser);
          console.log("Insert: ", insertuser);

          if (activeuser.contactos[activeuser.contactos.length - 1].email == "") {
            activeuser.contactos[activeuser.contactos.length - 1] = { email: insertuser.email, chat: [initmessage] };
          } else {
            activeuser.contactos.push({ email: insertuser.email, chat: [initmessage] });
          }
          this.baseref.child(this.idUsuario).update(activeuser);
          alert("Contacto agregado");
        } else {
          alert("No puedes repetir contactos");
        }
      }
    }
  }
}
