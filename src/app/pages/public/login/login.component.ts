import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserI } from 'src/app/shared/interfaces/UserI';
import { RegisterService } from 'src/app/shared/services/register/register.service'
import * as firebase from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  baseref = firebase.database().ref('items');
  userForm = new FormGroup({
    email: new FormControl( '', Validators.required),
    password: new FormControl('', Validators.compose([Validators.minLength(8),Validators.required]))
  });
  title: string = "Hola Mundo";
  color: string = "red"

  constructor(private router:Router, private authService:AuthService, private registerService:RegisterService) { }

  listofusers: UserI[];

  ngOnInit(): void {
    window.localStorage.clear();
    this.listofusers = this.registerService.PullRegister();
    // console.log("oninit");
    for(let i=0;i<this.listofusers.length;i++){
      //console.log(this.listofusers[i].email);
      // console.log("oninit-for");
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  doLogin() {
    const user: UserI = {
      email: this.userForm.controls.email.value,
      password: this.userForm.controls.password.value,
      name:'',
      lname:'',
      telefono:this.userForm.controls.email.value,
      username:''
    };

    this.authService.login(user,this.listofusers);
    const islogged= this.authService.isLogged();
    // user.password = undefined;
    // this.listofusers = undefined;

    if(islogged){
      console.log("esta logiao");
      this.router.navigate(['/']);
    }else{
      console.log("NO esta logiao");
      this.router.navigate(['/login']);
    }
  }

}
