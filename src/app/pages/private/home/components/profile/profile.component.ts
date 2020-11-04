import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  baseref = firebase.database().ref('items');
  storage = firebase.storage();
  imgsrc: any;
  proname: string;
  prolname: string;
  prouname: string;
  picture = null;
  fileIsSelected: boolean = false;
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
  onFileSelected(e) {
    this.fileIsSelected = true;
    this.picture = e.target.files[0];
    console.log("selecteFile"+this.picture.name);
    if (this.picture.length == 0 || !(/\.(jpg|png)$/i).test(this.picture.name)) {
      alert('Ingrese una imagen con alguno de los siguientes formatos: .jpeg/.jpg/.png.');
      // document.getElementById("formRegister").reset();
      console.log("archivo de imagen errado");
    }else{
      console.log("archivo de imagen valido");
      var filename = window.localStorage.getItem("user").split('","')[0].split('":"')[1];
      var storageRef = this.storage.ref("/imagenes/" + filename);
      console.log(storageRef);
      
      var uploadTask = storageRef.put(this.picture);
      uploadTask.on('state_changed', function (snapshot) {
      }, function (error) {
        console.log(error);
      }, function () {
        var downloadURL = uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
          alert("subio el archivo de la foto"+ downloadURL);
        });
        // console.log(downloadURL);
      });
    }
  }
  updateprofile() {

    let loged = window.localStorage.getItem('user').split('","')[0].split('":"')[1];
    let user: any;
    let key: any;
    this.baseref.on('child_added', snapshot => {
      if (loged == snapshot.val().email) {
        user = snapshot.val();
        key = snapshot.ref.key;
      }
    });
    user.name = this.proname;
    user.lname = this.prolname;
    user.username = this.prouname;
    this.baseref.child(key).update(user);
    alert("Updated succesfuly");
  }
}
