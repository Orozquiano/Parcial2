import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageI } from 'src/app/pages/private/home/interfaces/MessageI';
import { UserI } from 'src/app/shared/interfaces/UserI';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket: any;
  baseref = firebase.database().ref('items');
  constructor() { }

  connect() {
    return new Observable(observer => {
      this.socket = io('https://suanfanzapp2.loca.lt');//lt -p 3000 -s suanfanzapp2
      this.socket.on('connect', () => {
        observer.next();
      })
    })
  }

  getNewMsgs() {
    return new Observable(observer => {
      this.socket.on("newMsg", msg => {
        observer.next(msg);
      });
    });
  }

  sendMsg(msg: MessageI) {
    this.socket.emit('newMsg', msg);
    let user:UserI;
    let recept: UserI;
    let userid="";
    let receptid="";
    let user_e= window.localStorage.getItem('user').split('";"')[0].split('":"')[1].replace('","password',"");
    let recep_e=msg.owner;
    msg.owner=user_e;
    console.log("Actualizando "+user_e+" para "+recep_e);
    this.baseref.on("child_added",snapshot=>{
      if(snapshot.val().email==user_e){
        user=snapshot.val();
        userid=snapshot.ref.key;
      }
      if(snapshot.val().email==recep_e){
        recept=snapshot.val();
        receptid=snapshot.ref.key;
      }
    });
    for(let c=0;c<user.contactos.length;c++){
      if(user.contactos[c]!= null && user.contactos[c].email==recep_e){
        user.contactos[c].chat[user.contactos[c].chat.length]=msg;
        this.baseref.child(userid).update(user);
        msg.isMe=false;
      }
    }
    let existe=false;
    for(let c=0;c<recept.contactos.length;c++){
      if(recept.contactos[c].email==user_e){
        existe=true;
        recept.contactos[c].chat[recept.contactos[c].chat.length]=msg;
        // console.log(recept.contactos[c].chat);
        
        this.baseref.child(receptid).update(recept);
      }
    }
    if(!existe){
      alert("Este usuario no lo tiene en sus contactos"+recept.email+user_e);
    }
  }

  disconnect() {
    this.socket.disconnect();
  }

}
