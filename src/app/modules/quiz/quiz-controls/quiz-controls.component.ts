import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-quiz-controls',
  templateUrl: './quiz-controls.component.html',
  styleUrls: ['./quiz-controls.component.css']
})
export class QuizControlsComponent implements OnInit, OnChanges {

  @Output() prevPressed = new EventEmitter<any>();
  @Output() nextPressed = new EventEmitter<any>();
  @Input() buttonState:Array<boolean>

  nextEnabled:boolean;
  prevEnabled:boolean;


  constructor() { }

  ngOnInit() {
  }

  doPrev(){
   this.prevPressed.emit();
  }

  doNext(){
    this.nextPressed.emit();
  }

  ngOnChanges(){
    this.nextEnabled = this.buttonState[1];
    this.prevEnabled = this.buttonState[0];
  }



}
