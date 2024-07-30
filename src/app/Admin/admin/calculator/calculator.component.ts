import { Component } from '@angular/core';
import { EMPLIST } from '../../../employeeList';
import { UserData } from '../../../userdata.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  employees = EMPLIST;
  selectedEmployee!:UserData[]

  selectEmployee(data:UserData[])
  {
    this.selectedEmployee = data;
    // console.log(this.selectedEmployee);
  }
}
