import { Component } from '@angular/core';

@Component({
  selector: 'app-day4-pipes',
  templateUrl: './day4-pipes.component.html',
  styleUrl: './day4-pipes.component.css'
})
export class Day4PipesComponent {
  someValue:string = "Some value";
  today:Date = new Date();
}
