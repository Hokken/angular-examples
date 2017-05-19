import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizControlsComponent } from './quiz-controls.component';

describe('QuizControlsComponent', () => {
  let component: QuizControlsComponent;
  let fixture: ComponentFixture<QuizControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
