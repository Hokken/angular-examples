import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import {Subject} from "rxjs/Subject";
import {retry} from "rxjs/operator/retry";

@Injectable()
export class AuthenticationService {

  loggedIn:boolean;
  user:string;
  authEvent:Subject<boolean>;
  r_error="";
  l_error="";
  msg="";

  constructor() {
    this.authEvent = new Subject();
  }

  registerAccount(email:string,password:string){
    this.r_error="";
    this.l_error="";
    this.msg="";
     firebase.auth().createUserWithEmailAndPassword(email,password)
       .then(
         //response=> console.log(response)
         () => this.msg="Account registered, please Log in"
       )
       .catch(
         (error:any) => {
           this.r_error = error.message;
         }
       )
  }

  login(email:string,password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(
        () => {
          this.loggedIn = true;
          this.authEvent.next(true);
          this.user=email
        }
      )
      .catch(
        (error:any) => {
          this.l_error = error.message;
        }
      )
  }

  logout(){
    firebase.auth().signOut()
      .then(
        () => {
          this.loggedIn = false;
          this.authEvent.next(false)
          this.user = "";
        }

      )
  }

}
