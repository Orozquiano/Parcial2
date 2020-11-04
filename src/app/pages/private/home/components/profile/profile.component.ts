import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  baseref = firebase.database().ref('items');
  imgsrc: any;
  proname: string;
  prolname: string;
  prouname: string;
  constructor() { }

  ngOnInit(): void {
    let loged = window.localStorage.getItem('user').split('","')[0].split('":"')[1];
    this.baseref.on('child_added', snapshot => {
      if (loged == snapshot.val().email) {
        this.proname = snapshot.val().name;
        this.prolname = snapshot.val().lname;
        this.prouname = snapshot.val().username;
      }
    });
  }

  cerrarProfile() {
    document.getElementById("profilediv").style.display = "none";
  }

  updateprofile() {
    let loged = window.localStorage.getItem('user').split('","')[0].split('":"')[1];
    let user:any;
    let key:any;
    this.baseref.on('child_added', snapshot => {
      if (loged == snapshot.val().email) {
        user=snapshot.val();
        key=snapshot.ref.key;
      }
    });
    user.name=this.proname;
    user.lname=this.prolname;
    user.username=this.prouname;
    this.baseref.child(key).update(user);
    alert("Updated succesfuly");
  }
}
