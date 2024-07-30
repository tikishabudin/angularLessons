import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicebangService {

  bang:Subject<string> = new Subject<string>();

  constructor() { }

  getService()
  {
    return this.bang;
  }
}
