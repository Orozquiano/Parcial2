import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserI } from 'src/app/shared/interfaces/UserI';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title: string = "Hola Mundo";
  color: string = "red"

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  doLogin() {
    console.log("logeado apá "+document.getElementById("email"));
    // const emailx=document.getElementById("email");
    // const passwordx=document.getElementById("password");
    const user: UserI = {
      email: "",
      username: "",
      favNumber: 0,
      lname: "",
      password: "",
      name: "",
    };
    // this.authService.login(user);
    console.log("logeado apá "+user.email);

    this.router.navigate(['/']);
  }

}
