import { Component } from '@angular/core';
import { UserDataService } from './shared/user-data.service';
import { EMPLIST } from './employeeList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularLessons';
  currentValue = 10;
  show = true;
  
  imagePath = "../assets/images/";

  constructor(private userDataSvc:UserDataService){
    // localStorage.setItem('users',JSON.stringify(EMPLIST));
    this.userDataSvc.loadUsers();
    this.userDataSvc.setSelectedUser(this.userDataSvc.getUsers()[0]);
  }

  doChange()
  {
    this.currentValue++;
  }

  doShow()
  {
    this.show = !this.show;
  }

  
}
