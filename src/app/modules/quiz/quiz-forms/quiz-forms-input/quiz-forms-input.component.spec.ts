import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormsInputComponent } from './quiz-forms-input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {QuizService} from "../../quiz.service";

describe('QuizFormsInputComponent', () => {
  let component: QuizFormsInputComponent;
  let fixture: ComponentFixture<QuizFormsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizFormsInputComponent ],
      imports:[ReactiveFormsModule],
      providers:[QuizService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizFormsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
