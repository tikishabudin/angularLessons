import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicebangService } from '../servicebang.service';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrl: './sample2.component.css'
})
export class Sample2Component {
  private bangSub = new Subscription();

  constructor(private bangService:ServicebangService){}

  ngOnInit()
  {
    this.bangSub = this.bangService.getService().subscribe((received)=>{
      console.log("Inside sample2: " + received);
    });
  }

  ngOnDestroy()
  {
    this.bangSub.unsubscribe();
  }

  onClick(data:string)
  {
    this.bangService.getService().next("From sample 2: " + data);
  }
}
