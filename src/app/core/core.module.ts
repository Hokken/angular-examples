import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from "./nav/nav.component";
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    NavComponent,
    HomeComponent,
  ],
  exports:[
    NavComponent,
    AppRoutingModule
  ]
})
export class CoreModule { }
