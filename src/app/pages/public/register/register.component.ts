import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from 'src/app/shared/interfaces/UserI';
import { AuthService } from 'src/app/shared/services/auth.service';
import {RegisterService} from 'src/app/shared/services/register/register.service'
import * as firebase from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  baseref = firebase.database().ref('items');
  userForm = new FormGroup({
    email: new FormControl( '', Validators.compose([Validators.email, Validators.required])),
    //telefono: new FormControl( '', Validators.compose([Validators.minLength(10), Validators.required])),
    telefono: new FormControl('', Validators.compose([Validators.pattern(/^[+]+[0-9]+$/),Validators.required, Validators.minLength(9)])),
    name: new FormControl('', Validators.compose([Validators.pattern(/^[a-zA-Z]+$/),Validators.required])),
    lname: new FormControl('', Validators.compose([Validators.pattern(/^[a-zA-Z]+$/),Validators.required])),
    username: new FormControl('', Validators.compose([Validators.pattern(/^[a-zA-Z]+$/),Validators.required])),
    password: new FormControl('', Validators.compose([Validators.minLength(8),Validators.required])),
    vpassword: new FormControl('',Validators.compose([Validators.minLength(8),Validators.required])),
  });

  constructor(private router:Router, private authService:AuthService, private registerService:RegisterService) { }
  
  listaRegistro: UserI[];
  
  ngOnInit(): void {
    this.listaRegistro = this.registerService.PullRegister();
    console.log(this.listaRegistro);
  }
  
  doRegister(e) {
    e.preventDefault();
    
    const user: UserI = {
      email: this.userForm.controls.email.value,
      username: this.userForm.controls.username.value,
      telefono: this.userForm.controls.telefono.value,
      lname: this.userForm.controls.lname.value,
      password: this.userForm.controls.password.value,
      name:this.userForm.controls.name.value 
    };
    console.log(this.userForm.status);

    let emailExist = false;
    console.log('no esxiste el hp email'+emailExist);
    if(this.userForm.status == "INVALID"){
      console.log("nel perro");
    }else{
      for(let i=0; i<this.listaRegistro.length;i++){

        if(this.userForm.controls.email.value=== this.listaRegistro[i].email){
          emailExist=true;
        }
      }
      if(emailExist){
        console.log("Su email ya existe deje de ser tan orozco");
      }
      else{
        if(this.userForm.controls.vpassword.value=== this.userForm.controls.password.value){
          
          this.baseref.push(user);
          this.listaRegistro.push(user);
          user.password=undefined;
          window.localStorage.setItem('items', JSON.stringify(user) );
          this.authService.login(user, this.listaRegistro);
          this.router.navigate(['/']);
        }else{
          alert("La contraseña no coincide");
          this.router.navigate(['/register']);
        }
      }
    }
  
    console.log(this.userForm);
    
    
    

    
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
