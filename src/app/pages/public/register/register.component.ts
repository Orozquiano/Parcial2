import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from 'src/app/shared/interfaces/UserI';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  userForm = new FormGroup({
    email: new FormControl( '', Validators.required),
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    favNumber: new FormControl(''),
  });

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  doRegister(e) {
    e.preventDefault();

    const user: UserI = {
      email: this.userForm.controls.email.value,
      username: this.userForm.controls.username.value,
      favNumber: this.userForm.controls.favNumber.value,
      lname: this.userForm.controls.lname.value,
      password: this.userForm.controls.password.value,
      name:this.userForm.controls.name.value 
    };


    console.log(this.userForm);

    this.authService.login(user);

    this.router.navigate(['/']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
