import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  baseref = firebase.database().ref('items');

  constructor() { }
  goToRegister(){
    let regList = [];
    this.baseref.on('child_added', snapshot =>{
      regList.push(snapshot.val())
    })
    return regList;
  }
}
