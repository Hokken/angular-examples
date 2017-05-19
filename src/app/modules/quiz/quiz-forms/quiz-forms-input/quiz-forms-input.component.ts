import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {QuizService} from "../../quiz.service";

@Component({
  selector: 'app-quiz-forms-input',
  templateUrl: './quiz-forms-input.component.html',
  styleUrls: ['./quiz-forms-input.component.css']
})
export class QuizFormsInputComponent implements OnInit {

  @Input() data: any;
  @Input() id:number;


  myForm: FormGroup

  constructor(private qService:QuizService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
    this.myForm.patchValue({answer:this.qService.userAnswers[this.id]})
  }

  buildForm() {

    this.myForm = this.fb.group({
       answer:[""]
    })

    this.myForm.valueChanges.subscribe(
      (data=> {
        console.log(data);
          this.qService.userAnswers[this.id] = data.answer
      }
      )
    )

  }

}
