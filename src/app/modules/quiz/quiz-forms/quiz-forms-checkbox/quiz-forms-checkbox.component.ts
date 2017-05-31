import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {QuizService} from "../../quiz.service";
import {QuizFormsBase} from "../quiz-forms-base";

@Component({
  selector: 'app-quiz-forms-checkbox',
  templateUrl: './quiz-forms-checkbox.component.html',
  styleUrls: ['./quiz-forms-checkbox.component.css']
})
export class QuizFormsCheckboxComponent extends QuizFormsBase implements OnInit {

  @Input() data: any;
  @Input() id: number;

  get options(): FormArray {
    return this.myForm.get('options') as FormArray;
  }

  myForm: FormGroup

  constructor(private qService: QuizService, private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.buildForm();
    //this.myForm.patchValue({options: this.qService.userAnswers[this.id]})
  }

  buildForm() {

    this.myForm = this.fb.group({
      options: this.buildOptions()
    });

    this.myForm.valueChanges.subscribe(
      (data => {
          //console.log(data);
          this.qService.userAnswers[this.id] = data.options
        }
      )
    )
  }

  buildOptions() {

    let arr = [];
    this.data.options.forEach((item,i)=>arr.push(new FormControl(this.getUserChoice(i))))

    return this.fb.array(arr);
  }

  getUserChoice(val:number){
    if(this.qService.userAnswers[this.id]===undefined){
      return false
    }

    return this.qService.userAnswers[this.id][val]
  }


}
