import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationComponent} from "./authentication.component";
import {AuthenticationService} from "./authentication.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthenticationComponent
  ],
  providers:[
    AuthenticationService
  ]
})
export class AuthenticationModule { }
