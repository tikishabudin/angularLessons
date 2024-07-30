import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAttDir]'
})
export class AttDirectiveDirective implements OnInit {
  @Input({alias:'appAttDir'}) something:string = "";
  @Input() blah:string = "";

  @HostListener('click') 
  onClick(eventData:Event)
  {
    console.log(eventData);
    // this.textColor = "blue";
    // this.message = "Don't touch me";
    this.hostElement.nativeElement.innerHTML = "This was changed by the directive";
    this.hostElement.nativeElement.style.backgroundColor = "#ff00ff";
  }

  @HostBinding('style.color') textColor:string = "";
  @HostBinding('innerHTML') message:string = "Start";

  constructor(private hostElement:ElementRef) {
    
   }

   ngOnInit()
   {
    console.log(this.something);
   }
}
