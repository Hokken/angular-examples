import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsComponent} from "./news.component";
import {NewsItemComponent} from "./news-item/news-item.component";
import {NewsSetComponent} from "./news-set/news-set.component";
import {NewsService} from "./news.service";
import {ReactiveFormsModule} from "@angular/forms";
import {TruncateTextPipe} from "../../shared/truncate-text.pipe";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({

  declarations: [
    NewsComponent,
    NewsItemComponent,
    NewsSetComponent,
    TruncateTextPipe
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],

  providers:[
    NewsService
  ]
})
export class NewsModule { }
