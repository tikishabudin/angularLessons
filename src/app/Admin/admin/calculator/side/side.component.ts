import { Component } from '@angular/core';
import { UserData } from '../../../../userdata.model';
import { UserDataService } from '../../../../shared/user-data.service';


@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent {
  users!:UserData[];

  constructor(private userDataSvc:UserDataService){}

  ngOnInit()
  {
    this.users = this.userDataSvc.getUsers();
    this.userDataSvc.setSelectedUser(this.users[0]);
  }

  selectUser(emp:UserData)
  {
    this.userDataSvc.setSelectedUser(emp);
  }
}
