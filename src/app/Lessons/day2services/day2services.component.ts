import { Component, inject } from '@angular/core';
import { SharingService } from './sharing.service';

@Component({
  selector: 'app-day2services',
  templateUrl: './day2services.component.html',
  styleUrl: './day2services.component.css'
})
export class Day2servicesComponent {
  // private shareSvc2:SharingService = inject(SharingService);
  show = true;

  constructor(private shareSvc:SharingService){

  }

  onClick()
  {
    
    this.shareSvc.setSomeData("This was changed in the day2services component");
    this.show = true;
  }
}
