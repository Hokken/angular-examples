import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormsRadioComponent } from './quiz-forms-radio.component';
import {ReactiveFormsModule} from "@angular/forms";
import {QuizService} from "../../quiz.service";

describe('QuizFormsRadioComponent', () => {
  let component: QuizFormsRadioComponent;
  let fixture: ComponentFixture<QuizFormsRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizFormsRadioComponent ],
      imports:[ReactiveFormsModule],
      providers:[QuizService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizFormsRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
