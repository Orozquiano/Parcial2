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
    telefono: new FormControl('', Validators.compose([Validators.pattern(/^[+]+[0-9]+$/),Validators.required, Validators.maxLength(20), Validators.minLength(7)])),
    name: new FormControl('', Validators.compose([Validators.pattern(/^[a-zA-Z ]+$/),Validators.required])),
    lname: new FormControl('', Validators.compose([Validators.pattern(/^[a-zA-Z ]+$/),Validators.required])),
    username: new FormControl('', Validators.compose([Validators.maxLength(20),Validators.required, Validators.minLength(6)])),
    password: new FormControl('', Validators.compose([Validators.minLength(6),Validators.required])),
    vpassword: new FormControl('',Validators.compose([Validators.minLength(6),Validators.required])),
  });

  constructor(private router:Router, private authService:AuthService, private registerService:RegisterService) { }
  
  listaRegistro: UserI[];
  
  ngOnInit(): void {
    if(this.authService.isLogged()){
      console.log("Existe usuario");
      console.log(window.localStorage.getItem("user"));
      this.router.navigate(['/']);
    }else{
      console.log("No Existe usuario");
    }
    this.listaRegistro = this.registerService.PullRegister();
    console.log(this.listaRegistro);
  }
  
  doRegister(e) {
    e.preventDefault();
    
    const user: UserI = {
      email: this.userForm.controls.email.value,
      username: this.userForm.controls.username.value,
      telefono: this.userForm.controls.telefono.value.replace(" ",""),
      lname: this.userForm.controls.lname.value,
      password: this.userForm.controls.password.value,
      name:this.userForm.controls.name.value,
      contactos:[""]
    };
    console.log(this.userForm.status);

    let emailExist = false;
    let telExist = false;
    if(this.userForm.status == "INVALID"){
      // alert("nel perro");
      if(this.userForm.controls.password.value == this.userForm.controls.vpassword.value){
        alert(this.Validaciones(user));
      }else{
        alert("Las contraseñas no coinciden");
      }
      console.log(this.userForm);
    }else{
      for(let i=0; i<this.listaRegistro.length;i++){

        if(this.userForm.controls.email.value=== this.listaRegistro[i].email){
          emailExist=true;
        }
        if(this.userForm.controls.telefono.value=== this.listaRegistro[i].telefono){
          telExist=true;
        }
      }
      if(emailExist || telExist){
        if(emailExist){
          alert("Su email ya se encuentra registrado");
        }else{
          alert("Su telefono ya se encuentra registrado");
        }
      }
      else{
        if(this.userForm.controls.vpassword.value=== this.userForm.controls.password.value){
          
          this.baseref.push(user);
          this.listaRegistro.push(user);
          user.password=undefined;
          
          this.authService.login(user, this.listaRegistro);
          this.router.navigate(['/']);
        }else{
          alert("La contraseña no coincide");
          // this.router.navigate(['/register']);
        }
      }
    }
    
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  Validaciones(user: UserI){
    console.log("Validando...");
    //email
    if(user.email.includes("@")){
      // console.log("incluye @");
      if(user.email.indexOf("@")!=0){
        // console.log("hay algo antes del @");
        if(user.email.includes(".")){
          // console.log("Incluye .");
          if(user.email.indexOf(".")-user.email.indexOf("@")==1){
            return "Digite un dominio de correo válido";
          }else{
            // console.log("El dominio es valido");
            if(user.email.lastIndexOf(".")<user.email.length-1){
              if(user.email.includes(' ')){
                return "El correo no debe tener espacios";
              }else{
                console.log("Todo correcto");
                // console.log("Esta bien");
              }
            }else{
              return "Digite un servidor valido para el correo example@correo.es";
            }
          }
        }else{
          return "El correo debe incluir .";
        }
      }else{
        return "el correo debe tener algo antes del @";
      }
    }else{
      return "el correo no incluye @";
    }
    //fin validacion correo
    //validacion username
    if(user.username.length>20 || user.username.length<6){
      return "El username debe tener minimo 6 caracteres y máximo 20 caracteres";
    }
    //fin validacion username
    // validacion password
    if(user.password.length<6){
      return "La contraseña debe contener minimo 6 caracteres";
    }
    //fin de contraseña
    //validacion nombre
    for(let i=0;i<user.name.length;i++){
      if(user.name[i].toUpperCase() == user.name[i].toLowerCase() && user.name[i]!=" "){
        return "El nombre no debe tener numeros ni simbolos, solo letras y/o espacios";
      }
    }
    // fin validacion nombre
    // validacion apellido
    for(let i=0;i<user.lname.length;i++){
      if(user.lname[i].toUpperCase() == user.lname[i].toLowerCase() && user.lname[i]!=" "){
        return "El apellido no debe tener numeros ni simbolos, solo letras y/o espacios";
      }
    }
    //fin validacion apellido
    // validacion telefono
    if(user.telefono.length>20 || user.telefono.length<7){
      return "El telefono debe contener minimo 7 cifras o máximo 20";
    }else{
      for(let i=0;i<user.telefono.length;i++){
        if(Number.isNaN(parseInt(user.telefono[i]))==true && user.telefono[i]!="+"){
          return "El telefono no debe tener letras ni simbolos, solo numeros (se vale el '+' en caso del codigo internacional)";
        }
      }
    }
    return "Contacte con los desarrolladores, los campos estan bien";

  }
}
