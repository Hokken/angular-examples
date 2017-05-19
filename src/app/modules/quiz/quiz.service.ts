import {EventEmitter, Injectable, Output} from '@angular/core';
import {quiz} from "./quiz";
import {Subject} from "rxjs/Subject";

@Injectable()
export class QuizService {

  quiz: any;
  quizName: string;
  quizQuestions: object[];

  userAnswers:Array<any>

  @Output() dataChanged = new Subject<any>();

  constructor() {
    this.quiz = quiz;
    this.quizName = quiz.config.name;
    this.quizQuestions = quiz.questions;
    this.userAnswers = [];

    this.dataChanged.subscribe(
      (data=>console.log(data))
    )
  }

 getCurrentQuestion(counter) {
    return this.quizQuestions[counter];
  }

}
