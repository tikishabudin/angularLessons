import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServicebangService } from '../servicebang.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrl: './sample1.component.css'
})
export class Sample1Component implements OnInit, OnDestroy{

  private bangSub = new Subscription();

  constructor(private bangService:ServicebangService){}

  ngOnInit()
  {
    this.bangSub = this.bangService.getService().subscribe((received)=>{
      console.log("Inside sample1: " + received);
    });
  }

  ngOnDestroy()
  {
    this.bangSub.unsubscribe();
  }

  onClick(data:string)
  {
    this.bangService.getService().next("From sample 1: " + data);
  }
}
