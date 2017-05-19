import {Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup} from "@angular/forms";
import {QuizService} from "../../quiz.service";

@Component({
  selector: 'app-quiz-forms-radio',
  templateUrl: './quiz-forms-radio.component.html',
  styleUrls: ['./quiz-forms-radio.component.css']
})
export class QuizFormsRadioComponent implements OnInit {

  @Input() data:any;
  @Input() id:number;

  myForm: FormGroup

  constructor(private qService:QuizService,  private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    this.myForm.patchValue({option:this.qService.userAnswers[this.id]})
  }

  buildForm() {
    this.myForm = this.fb.group({
      option:[""]    })


    this.myForm.valueChanges.subscribe(
      (data=> {
          console.log(data);
          this.qService.userAnswers[this.id] = data.option
        }
      )
    )
  }

}
