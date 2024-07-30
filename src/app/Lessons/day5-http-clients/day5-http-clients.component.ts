import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-day5-http-clients',
  templateUrl: './day5-http-clients.component.html',
  styleUrl: './day5-http-clients.component.css'
})
export class Day5HttpClientsComponent {

  constructor(private comms:HttpClient){}

  ngOnInit()
  {
    // this.comms.post('https://trainingproject-fbe04-default-rtdb.europe-west1.firebasedatabase.app/demo.json',
    //   {title:'Something Else',badan:"The 2nd quick brown fox jumps over the lazy dog. Oops! the dog wasn't that lazy after all"})
    // .subscribe((result)=>{
    //   console.log(result);
    // });

    this.comms.get<{
      [key:string]:
      {
        id?:String,
        title:string,
        badan:string
      }}>('https://trainingproject-fbe04-default-rtdb.europe-west1.firebasedatabase.app/demo.json')
    .pipe(
      map((fromServer)=>{
      
        const doneArray: {id?:String,title:string,badan:string}[] = [];
        
        for(const key in fromServer)
        {
          doneArray.push({...fromServer[key],id:key});
        }

        return doneArray;
    }))
    .subscribe((resultArray)=>{
      console.log(resultArray);
    });

    // this.comms.delete('https://trainingproject-fbe04-default-rtdb.europe-west1.firebasedatabase.app/demo.json')
    // .subscribe(()=>{
    //   console.log("Delete done");
    // });
  }

}
