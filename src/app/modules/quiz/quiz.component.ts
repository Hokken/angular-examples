import {Component, OnInit} from '@angular/core';
import {QuizService} from "./quiz.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  qPointer: number;
  quizCurrentQuestion:any;
  buttonState:Array<boolean>

  constructor(public qService:QuizService) {
    this.qPointer = 0;
    this.buttonState = [false,true];
  }

  ngOnInit() {
    this.quizCurrentQuestion = this.qService.getCurrentQuestion(this.qPointer);
  }

  doPrev(e){

    this.qPointer--;
    this.quizCurrentQuestion = this.qService.quizQuestions[this.qPointer];

    this.setButtonState();
  }

  setButtonState(){

    if(this.qPointer===0) {
      this.buttonState = [false,true];
      return
    }

    if(this.qPointer===this.qService.quizQuestions.length-1) {
      this.buttonState = [true,false];
      return
    }

    this.buttonState = [true,true];

  }

  doNext(e){

    this.qPointer++;
    this.quizCurrentQuestion = this.qService.getCurrentQuestion(this.qPointer);

    this.setButtonState();

  }


}
