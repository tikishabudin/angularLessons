import { Component } from '@angular/core';
import { UserData } from '../../../../userdata.model';
import { UserDataService } from '../../../../shared/user-data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  empData:UserData;
  salary:{gross:number,tax:number,nett:number} = {gross:0, tax:0, nett:0};

  constructor(private userDataSvc:UserDataService){
    this.empData = this.userDataSvc.getSelectedUser();
  }

  ngDoCheck()
  {
    this.empData = this.userDataSvc.getSelectedUser();
  }

  doCalculate(txtHours:string)
  {
    var numHours = Number(txtHours);
    const payRate = 50;
    const otRate = 1.5;
    const taxRate = 0.25;
    const regHours = 40;

    if(numHours < regHours)
    {
      this.salary.gross = numHours * payRate;
    }
    else
    {
      this.salary.gross = ((numHours-regHours) * payRate * otRate) + (regHours * payRate);
    }

    this.salary.tax = this.salary.gross * taxRate;
    this.salary.nett = this.salary.gross - this.salary.tax;
  }
}
