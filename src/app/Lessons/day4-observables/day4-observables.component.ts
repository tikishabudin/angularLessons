import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-day4-observables',
  templateUrl: './day4-observables.component.html',
  styleUrl: './day4-observables.component.css'
})
export class Day4ObservablesComponent implements OnInit, OnDestroy {

  private demoSub!:Subscription;

  ngOnInit()
  {
    const demoObs = Observable.create((observer:Observer<number>)=>{
      let counter = 0;
      setInterval(()=>{
        if(counter === 3)
          observer.complete()
        observer.next(counter);
        counter++
        if(counter === 5)
          observer.error(new Error('Counter has reached 5'));
      },1000);
    });

    this.demoSub=demoObs.subscribe(
      (next:number)=>{
        console.log("Next Value: " + next);
      },
      (error:Error)=>{
        console.log('Message: '+error);
      },
      ()=>{
        console.log('Run complete');
      });
  }

  ngOnDestroy()
  {
    this.demoSub.unsubscribe();
  }
}
