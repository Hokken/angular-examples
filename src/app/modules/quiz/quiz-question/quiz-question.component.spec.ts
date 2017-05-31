import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionComponent } from './quiz-question.component';
import {QuizFormsInputComponent} from "../quiz-forms/quiz-forms-input/quiz-forms-input.component";
import {QuizFormsRadioComponent} from "../quiz-forms/quiz-forms-radio/quiz-forms-radio.component";
import {QuizFormsCheckboxComponent} from "../quiz-forms/quiz-forms-checkbox/quiz-forms-checkbox.component";
import {ReactiveFormsModule} from "@angular/forms";
import {QuizService} from "../quiz.service";

describe('QuizQuestionComponent', () => {
  let component: QuizQuestionComponent;
  let fixture: ComponentFixture<QuizQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuizQuestionComponent,
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
    fixture = TestBed.createComponent(QuizQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
