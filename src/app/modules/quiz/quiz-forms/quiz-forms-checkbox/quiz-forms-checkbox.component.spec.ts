import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormsCheckboxComponent } from './quiz-forms-checkbox.component';
import {ReactiveFormsModule} from "@angular/forms";
import {QuizService} from "../../quiz.service";

describe('QuizFormsCheckboxComponent', () => {
  let component: QuizFormsCheckboxComponent;
  let fixture: ComponentFixture<QuizFormsCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizFormsCheckboxComponent ],
      imports:[ReactiveFormsModule],
      providers:[QuizService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizFormsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });*/
});
