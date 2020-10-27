import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; //JP
import { Observable } from 'rxjs'; //JP
import 'firebase/firestore'; //JP
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Suanfanzapp';
  items: Observable<any[]>; //JP
  constructor(firestore: AngularFirestore){ //JP
    this.items = firestore.collection('items').valueChanges(); //JP
  }
}
