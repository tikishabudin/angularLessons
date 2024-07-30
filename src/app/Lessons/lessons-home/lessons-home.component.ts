import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-lessons-home',
  templateUrl: './lessons-home.component.html',
  styleUrl: './lessons-home.component.css'
})
export class LessonsHomeComponent {
  // @Input() greet = "";
  
  constructor(private route:ActivatedRoute){}

  ngOnInit()
  {
    this.route.params.subscribe((params:Params)=>{
      console.log('Hello ' + params['greet']);
    });

    this.route.queryParams.subscribe((qParams)=>{
      console.log('Query parameter' + qParams['val']);
    });

    this.route.fragment.subscribe((frag)=>{
      console.log('Frangment:' + frag);
    });
  }
}
