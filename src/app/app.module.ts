import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AuthenticationModule} from "./modules/authentication/authentication.module";
import {CoreModule} from "./core/core.module";
import {NewsModule} from "./modules/news/news.module";
import {QuizModule} from "./modules/quiz/quiz-module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthenticationModule,
    CoreModule,
    NewsModule,
    QuizModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
