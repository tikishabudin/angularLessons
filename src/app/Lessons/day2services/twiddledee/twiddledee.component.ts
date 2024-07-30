import { Component, OnInit,DoCheck } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-twiddledee',
  templateUrl: './twiddledee.component.html',
  styleUrl: './twiddledee.component.css'
})
export class TwiddledeeComponent implements DoCheck{
  constructor(private twidSrv:SharingService){}

  ngDoCheck(){
    console.log("In Twiddledee: " + this.twidSrv.getSomeData());
  }
}
