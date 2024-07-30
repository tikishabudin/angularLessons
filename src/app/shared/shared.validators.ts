import { AbstractControl } from "@angular/forms";

export function IsSame(control1:string,control2:string)
{
  return (control: AbstractControl)=>{
    const gottenControl1 = control.get(control1);
    const gottenControl2 = control.get(control2);
    
    console.log(gottenControl1?.value, gottenControl2?.value);
    
    if(gottenControl1?.value === gottenControl2?.value)
      return null;
    else
      return {sameAnswers:true};
  }
}