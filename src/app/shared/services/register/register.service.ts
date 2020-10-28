import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  baseref = firebase.database().ref('items');

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
}
