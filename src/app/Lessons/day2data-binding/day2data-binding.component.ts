import { Component } from '@angular/core';

@Component({
  selector: 'app-day2data-binding',
  templateUrl: './day2data-binding.component.html',
  styleUrl: './day2data-binding.component.css'
})
export class Day2dataBindingComponent {
  boundInput:string = "";
  input2?:HTMLInputElement;
  var1:string="";
  var2:string="";
  //divEl = new HTMLElement();

  doKeyUp()
  {
    this.var1 = this.var2;
  }
  doKeyUp2()
  {
    // this.var2 = this.var1;
  }

  doType(input:HTMLInputElement)
  {
    this.boundInput = input.value;
  }

  doType2()
  {
    this.input2!.value=this.boundInput;
  }

  doClick(data:HTMLInputElement,headerData:HTMLHeadingElement)
  {
    console.dir(data);
    console.dir(headerData);
    headerData.innerHTML = "The heading has <u>changed</u>";
    this.boundInput = "This input was changed";
    this.input2 = data;
    
    // this.divEl = data;
    // (this.divEl as HTMLInputElement).value;

  }


}
