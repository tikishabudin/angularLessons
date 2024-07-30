import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

function HasQuestionMark(control : AbstractControl)
{
  if(control.value?.includes('?'))
  {
    return null;
  }
  
  return {NoQuestionMark:true};
}

function IsNotSame(control1:string,control2:string)
{
  return (control: AbstractControl)=>{
    const gottenControl1 = control.get(control1);
    const gottenControl2 = control.get(control2);
    
    console.log(gottenControl1?.value, gottenControl2?.value);
    
    if(gottenControl1?.value != gottenControl2?.value)
      return null;
    else
      return {sameAnswers:true};
  }
}

@Component({
  selector: 'app-day3reactive-forms',
  templateUrl: './day3reactive-forms.component.html',
  styleUrl: './day3reactive-forms.component.css'
})
export class Day3reactiveFormsComponent {

  disable = true;

  newForm = new FormGroup({
    question: new FormControl('',{
      validators:[
        Validators.required,
        HasQuestionMark]
    }),
    answers:new FormGroup({
      answer: new FormControl('',{validators:[Validators.required]}),
      answer2: new FormControl('',{validators:[Validators.required]})
    },{
      validators:[IsNotSame('answer','answer2')]
    }),
  });

  onChange()
  {
    if(this.newForm.valid) //  && this.newForm.controls.answers.controls.answer2.dirty
    {
      this.disable = false;
      console.log(this.newForm);
    }
    else
      this.disable = true;
  }

  onSubmit()
  {
    console.log(this.newForm);
  }
}
