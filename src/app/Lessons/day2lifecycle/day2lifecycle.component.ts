import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-day2lifecycle',
  templateUrl: './day2lifecycle.component.html',
  styleUrl: './day2lifecycle.component.css'
})
export class Day2lifecycleComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {

  @Input() counter!:number;

  constructor(){
    
    console.log("CONSTRUCTOR called");
    console.log("Counter: " + this.counter);
  }

  ngOnInit(){
    this.counter=1;
    console.log("ngOnInit called");
  }

  ngOnChanges(changeData:SimpleChanges)
  {
    console.log("ngOnChanges called");
    console.log(changeData);
  }

  ngDoCheck(){console.log("ngDoCheck called");}
  ngAfterContentChecked(){console.log("ngAfterContentChecked called");}
  ngAfterContentInit(){console.log("ngAfterContentInit called");}
  ngAfterViewChecked(){console.log("ngAfterViewChecked called");}
  ngAfterViewInit(){console.log("ngAfterViewInit called");}
  ngOnDestroy(){console.log("ngOnDestroy called");}
}
