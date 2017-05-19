import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { QuizControlsComponent } from './quiz-controls/quiz-controls.component';
import { QuizFormsInputComponent } from './quiz-forms/quiz-forms-input/quiz-forms-input.component';
import { QuizFormsRadioComponent } from './quiz-forms/quiz-forms-radio/quiz-forms-radio.component';
import { QuizFormsCheckboxComponent } from './quiz-forms/quiz-forms-checkbox/quiz-forms-checkbox.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import {ReactiveFormsModule} from "@angular/forms";
import {QuizService} from "./quiz.service";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    QuizComponent,
    QuizControlsComponent,
    QuizFormsInputComponent,
    QuizFormsRadioComponent,
    QuizFormsCheckboxComponent,
    QuizQuestionComponent

  ],
  providers:[
    QuizService
  ]

})
export class QuizModule { }
