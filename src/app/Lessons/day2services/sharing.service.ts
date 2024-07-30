import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private someData = "";

  constructor() { }

  getSomeData():string{
    return this.someData;
  }

  setSomeData(change:string)
  {
    this.someData = change;
  }
}
