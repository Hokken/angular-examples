import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Subject} from "rxjs/Subject";
import {apiKey} from "./apikey"

@Injectable()
export class NewsService {

  apiKey:string;

  newsProviders:Array<any> = [
      {name: "BBC News", data: null, url: "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top"},
      {name: "CNN", data: null, url: "https://newsapi.org/v1/articles?source=cnn&sortBy=top"},
      {name: "IGN", data: null, url: "https://newsapi.org/v1/articles?source=ign&sortBy=top"},
      {name: "Daily Mail", data: null, url: "https://newsapi.org/v1/articles?source=daily-mail&sortBy=top"},
      {name: "Breitbart News", data: null, url: "https://newsapi.org/v1/articles?source=breitbart-news&sortBy=top"},
      {name: "Engadget", data: null, url: "https://newsapi.org/v1/articles?source=engadget&sortBy=top"},
      {name: "Metro", data: null, url: "https://newsapi.org/v1/articles?source=metro&sortBy=top"},
      {name: "National Geographic", data: null, url: "https://newsapi.org/v1/articles?source=national-geographic&sortBy=top"} 
    ]

  constructor(private http:Http) {
      this.apiKey = apiKey;
  }

  getNews(url) {
    return this.http.get(url+"&apiKey="+this.apiKey)
      .map(
        (response: Response) => {
          return response.json();
        })
  }

}
