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
// export class ConService{
//   private itemsCollection: AngularFirestoreCollection<Item>;
//   items: Observable<Item[]>; 
//   constructor(private afs: AngularFirestore){ 
//     this.itemsCollection = afs.collection<Item>('items');
//     this.items = this.itemsCollection.snapshotChanges().pipe(
//       map(actions => actions.map(a =>{
//         const data = a.payload.doc.data() as Item;
//         const id = a.payload.doc.id;
//         return {id, ...data};
//       }))
//     ); 
//   }
//   retornaItems(){
//     return this.items;
//   }
//   addItem(item : Item){
//     this.itemsCollection.add(item);
//   }
// }
export class AuthService {

  constructor(){}
  user: UserI | undefined;

  login(user: UserI) {
    const passKey = "suanfanzon";
    if (user.password === passKey) {
      this.user = user;
      window.localStorage.setItem('user', JSON.stringify(this.user));
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

