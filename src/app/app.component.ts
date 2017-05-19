import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import * as auth from "./firebase-auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  ngOnInit(){
   firebase.initializeApp({
       apiKey:auth.apiKey,
       authDomainL:auth.authDomain
   })
  }


}
