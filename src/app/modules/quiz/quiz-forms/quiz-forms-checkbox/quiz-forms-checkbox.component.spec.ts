import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormsCheckboxComponent } from './quiz-forms-checkbox.component';

describe('QuizFormsCheckboxComponent', () => {
  let component: QuizFormsCheckboxComponent;
  let fixture: ComponentFixture<QuizFormsCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizFormsCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizFormsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
