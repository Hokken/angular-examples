import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  loggedIn:boolean;
  error = "";
  registerForm:FormGroup;
  loginForm:FormGroup

  constructor(public authService:AuthenticationService, private fb: FormBuilder) {

  }

  ngOnInit() {

    this.authService.authEvent.subscribe(
      loggedIn => this.loggedIn = loggedIn
    );

    this.buildForms();

  }

  buildForms(){

    this.registerForm = this.fb.group({
        "email": new FormControl(null, [Validators.required,Validators.email]),
        "password": new FormControl(null,[Validators.required,Validators.minLength(6)])
    })


    this.loginForm = new FormGroup({
      "email": new FormControl(null, [Validators.required,Validators.email]),
      "password": new FormControl(null,[Validators.required,Validators.minLength(6)])
    })



  }

  onRegister(){
       this.error = "";
       const email = this.registerForm.value.email;
       const password =  this.registerForm.value.password;

       this.authService.registerAccount(email,password);
  }

  onLogin(){

    const email = this.loginForm.value.email;
    const password =  this.loginForm.value.password;

    this.authService.login(email,password);

  }

  onLogout(){

    this.authService.logout();
  }

}
