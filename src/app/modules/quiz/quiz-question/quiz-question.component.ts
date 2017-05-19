import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {QuizService} from "../quiz.service";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit, OnChanges {

  @Input() data:any;

  questionText:string;
  questionControls:any;
  questionType:string;
  questionId:number;

  constructor(public qService:QuizService) {

  }

  ngOnInit() {

  }

  ngOnChanges(){
    this.questionText = this.data.questionText;
    this.questionControls = this.data.controls;
    this.questionType = this.data.controls.type;
    this.questionId = this.data.id;
  }

}
