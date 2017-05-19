import {Component, OnInit} from '@angular/core';
import {NewsService} from "./news.service";
import {FormControl,FormGroup} from "@angular/forms";
import {isUndefined} from "util";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  animations:[

    trigger("set-animation", [
      transition("void => *", [style({
        opacity:0}),animate(500)]
      ),
      transition("* => void", [animate(500,style({
        opacity:0})
        )]
      )
    ])
  ]
})
export class NewsComponent implements OnInit  {

  news: Array<any>;
  btnDisabled: boolean;
  bText:string;
  bBckg:boolean;
  selectedNews: Array<object> = [];
  myForm:FormGroup;


  constructor(private newsService: NewsService) {

     this.news = newsService.newsProviders;
  }

  ngOnInit() {
    this.btnDisabled = true;
    this.bText = "Add";

    this.buildForm()
  }

  animationStarted(e){

  }

  animationDone(e){

  }


  buildForm(){
      this.myForm = new FormGroup({
        "news":new FormControl("")
      });
  }

  getNewsItemData(){
    if (this.btnDisabled === true) {
      return false;
    }

    return this.myForm.value.news.data!=null;
  }

  setBtnState(){
    this.bText = (this.getNewsItemData()===false ? "Add" : "Remove");
    this.bBckg = (this.getNewsItemData());
  }

  doSelectChange() {
    this.btnDisabled = false;
    this.setBtnState();
  }

  newsSetExist(){
    let objExist: any = this.selectedNews.find(el =>  el === this.myForm.value.news)
    if (isUndefined(objExist)) {
      return false
    } else {
      //console.log("deleting news set");
      return true
    }
  }

   onAddNews() {

    if (this.btnDisabled === true) {
      return
    }

    if(!this.newsSetExist()){

      this.addNewsSet();

    } else {
      this.deleteNewsSet();
    }
  }

  addNewsSet(){

    this.btnDisabled = true;


    this.newsService.getNews(this.myForm.value.news.url).subscribe(
      (data: any) => {
        this.myForm.value.news.data = data.articles.splice(0,8);
        this.selectedNews.unshift(this.myForm.value.news);
        this.btnDisabled = false;
        this.setBtnState();
        //console.log("news set created");
       // console.log(this.selectedNews);
      },
      (error:any) => {
        console.log("There was an error")
        this.btnDisabled = false;
      }
    )
  }

  setInitialState(){
    this.myForm.patchValue({"news":""});
    this.btnDisabled = true;
    this.setBtnState();
  }

  deleteNewsSet(){

    let indexOfItemToDelete = this.selectedNews.findIndex(el => el ===  this.myForm.value.news)

    //console.log("item to delete = "+ indexOfItemToDelete);
    this.selectedNews.splice(indexOfItemToDelete,1);
    this.myForm.value.news.data = null;
    this.setBtnState();

    if(this.selectedNews===[]){
     this.setInitialState();
    }
    //console.log(this.news)

  }

  onClearAll(){

    if (this.btnDisabled === true) {
      return
    }
    this.selectedNews = [];
    this.setInitialState();
  }

}
