import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizComponent } from './quiz.component';
import {QuizQuestionComponent} from "./quiz-question/quiz-question.component";
import {QuizControlsComponent} from "./quiz-controls/quiz-controls.component";
import {QuizFormsInputComponent} from "./quiz-forms/quiz-forms-input/quiz-forms-input.component";
import {QuizFormsCheckboxComponent} from "./quiz-forms/quiz-forms-checkbox/quiz-forms-checkbox.component";
import {QuizFormsRadioComponent} from "./quiz-forms/quiz-forms-radio/quiz-forms-radio.component";
import {ReactiveFormsModule} from "@angular/forms";
import {QuizService} from "./quiz.service";

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuizComponent,
        QuizQuestionComponent,
        QuizControlsComponent,
        QuizFormsInputComponent,
        QuizFormsCheckboxComponent,
        QuizFormsRadioComponent
      ],
      imports:[ReactiveFormsModule],
      providers:[QuizService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
