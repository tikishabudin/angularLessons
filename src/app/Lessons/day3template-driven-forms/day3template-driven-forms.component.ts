import { Component, input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-day3template-driven-forms',
  templateUrl: './day3template-driven-forms.component.html',
  styleUrl: './day3template-driven-forms.component.css'
})
export class Day3templateDrivenFormsComponent {
  disable:boolean=true;

  onChange(form:NgForm)
  {
    if(form.valid)
    {
      this.disable = false;
    }
    else
    {
      this.disable = true;
    }
  }
  
  onSubmit(formData:NgForm)
  {
    console.log(formData);
  }
}
